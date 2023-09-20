import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReduser } from "./filters";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReduser,
    },
    
})