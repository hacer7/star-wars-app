import { api } from '@/api'
import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch