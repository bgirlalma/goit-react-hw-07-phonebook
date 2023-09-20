import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "redux/api";
import { getContacts } from "redux/selectors";

export const BookContacts = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);

useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);

return(
    <div>
        <ul>
        {contacts.length > 0 && (contact => (
    <li key={contact.id}>
        <img src={contact.avatar} alt={contact.id}/>
        <p>{contact.name}: {contact.number}</p>
    </li>
    ))}
        </ul>

    </div>
)
}