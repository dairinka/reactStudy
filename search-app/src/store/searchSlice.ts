import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
  query: string;
};

const initialState: SearchState = {
  value: '',
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    addSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});
export const { addValue, addSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
