import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/contactsOperation";
import { getContacts, getError, getIsLoading } from "redux/selectors";
import { ProgressBar } from  'react-loader-spinner'
import { ContactsContainer, IsLoading,ItemStyled, ListStyled, StyledName } from "./bookContacts.styled";

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
        {isLoading && !error && <IsLoading>
<ProgressBar
  height="120"
  width="140"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#000000'
  barColor = '#660000'
/></IsLoading>}
        <ItemStyled>
        {contacts && contacts.map((item) => (
    <ListStyled key={item.id}>
        <StyledName>{item.name}:</StyledName>{item.number}
    </ListStyled>
    ))}
        </ItemStyled>

    </ContactsContainer>
)
}