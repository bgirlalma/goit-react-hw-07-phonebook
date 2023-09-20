 const contactsSlice = {
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      // Выполнится в момент старта HTTP-запроса
      fetchingInProgress(state) {
        state.isLoading = true
      },
      // Выполнится если HTTP-запрос завершился успешно
      fetchingSuccess(state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      // Выполнится если HTTP-запрос завершился с ошибкой
      fetchingError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  };

  export const {fetchingInProgress, fetchingSuccess, fetchingError} = contactsSlice.action;