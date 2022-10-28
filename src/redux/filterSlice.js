import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    updateFilter(_, action) {
      return action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
