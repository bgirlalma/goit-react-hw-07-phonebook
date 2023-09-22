import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/contactsOperation";
import { getContacts, getError, getIsLoading } from "redux/selectors";
import { deleteContact } from "redux/contactsOperation";
import { ProgressBar } from  'react-loader-spinner';
import { AiFillDelete } from "react-icons/ai";
import { ContactsContainer, IsLoading, ErrorTitle, ItemStyled, ListStyled, ButtonDelete, StyledName } from "./bookContacts.styled";

export const BookContacts = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
const isLoading = useSelector(getIsLoading);
const error = useSelector(getError)

useEffect(() => {
   dispatch(fetchContacts())
}, [dispatch]);

return(
    <ContactsContainer>
        {isLoading && <IsLoading>
<ProgressBar
  height="120"
  width="140"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#000000'
  barColor = '#660000'
/></IsLoading>}
{error && <ErrorTitle>An error occured: {error}!!!</ErrorTitle>}
        <ItemStyled>
        {contacts && contacts.map((item) => (
    <ListStyled key={item.id}>
        <StyledName>{item.name}:</StyledName>{item.number};
        <ButtonDelete onClick={() => {
            if (window.confirm(`Вы уверены, что хотите удалить контакт ${item.name}?`)) {
                dispatch(deleteContact(item.id))
            }}}>
            <AiFillDelete color="rgb(255, 0, 0)"/>
        </ButtonDelete>
    </ListStyled>
    ))}
        </ItemStyled>

    </ContactsContainer>
)
}