import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IServerDataResult, ModalData } from '../types/type';

export type SearchState = {
  value: string;
  query: string;
  data: IServerDataResult[];
  isModal: boolean;
  modalData: ModalData;
};

const initialState: SearchState = {
  value: '',
  query: '',
  data: [],
  isModal: false,
  modalData: {
    id: '',
    idFirstEpisode: '',
    idLastEpisode: '',
  },
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
    addServerData(state, action: PayloadAction<IServerDataResult[]>) {
      state.data = action.payload;
    },
    isShowModal(state, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
    getModalData(state, action: PayloadAction<ModalData>) {
      state.modalData = action.payload;
    },
  },
});
export const { addValue, addSearchQuery, addServerData, isShowModal, getModalData } =
  searchSlice.actions;
export default searchSlice.reducer;
