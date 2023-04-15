import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormFields } from '../types/type';

type FormState = {
  data: FormFields[];
  infoMessage: boolean;
};

const initialState: FormState = {
  data: [],
  infoMessage: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<FormFields>) {
      state.data.push({
        city: action.payload.city,
        state: action.payload.state,
        userName: action.payload.userName,
        email: action.payload.email,
        maxPrice: action.payload.maxPrice,
        pets: action.payload.pets,
        startDate: action.payload.startDate,
        file: action.payload.file,
      });
      state.infoMessage = true;
      showInfoMessage(true);
    },
    showInfoMessage(state, action: PayloadAction<boolean>) {
      state.infoMessage = action.payload;
    },
  },
});
export const { addFormData, showInfoMessage } = formSlice.actions;
export default formSlice.reducer;
