import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = "";

export const filterSlice = createSlice({
name: "filters",
initialState: filterInitialState,
reducers: {
setFilter: (state, action) => {
   return action.payload;
}
}
})

export const { setFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;