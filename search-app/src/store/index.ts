import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';
import { rickandmortyApi } from './rickandmortyApi';

const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['form/makeFormMold'],
      },
    }).concat(rickandmortyApi.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
