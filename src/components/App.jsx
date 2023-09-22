import { GlobalStyled } from "globalStyled";
import { BookContacts } from "./Contacts/bookContacts";
import { InputBookContacts } from "./Form/inputBookContacts";

export const App = () => {
  return (
    <div>
      <InputBookContacts/>
     <BookContacts/>
     <GlobalStyled/>
    </div>
  );
};
