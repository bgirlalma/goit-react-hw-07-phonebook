import axios from "axios";
// import Notiflix from 'notiflix';
import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice"; 

axios.defaults.baseURL = 'https://6509624af6553137159b52ae.mockapi.io/:endpoint';

export const fetchContacts = () => async dispatch => {
    try{
        // Индикатор загрузки
        dispatch(fetchingInProgress());
        // HTTP-запрос
        const res =await axios.get("/contscts");
        // Обработка данных
        dispatch(fetchingSuccess(res.data));
    }catch(e){
        dispatch(fetchingError(e.message))
    }
}