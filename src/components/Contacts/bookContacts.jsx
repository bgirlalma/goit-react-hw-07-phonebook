import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/contactsOperation";
import { getContacts, getError, getIsLoading } from "redux/selectors";

export const BookContacts = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
const isLoading = useSelector(getIsLoading);
const error = useSelector(getError)

useEffect(() => {
   dispatch(fetchContacts())
}, [dispatch]);

return(
    <div>
        {isLoading && !error && <p>Loading...</p>}
        <ul>
        {contacts && contacts.map((item) => (
    <li key={item.id}>
        <p>{item.name}: {item.number}</p>
    </li>
    ))}
        </ul>

    </div>
)
}