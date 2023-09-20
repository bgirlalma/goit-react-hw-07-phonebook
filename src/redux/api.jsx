import axios from "axios";
// import Notiflix from 'notiflix';
// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice"; 
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6509624af6553137159b52ae.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{
        const res =await axios.get("/contscts");
    return res.data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.message)
    }
})