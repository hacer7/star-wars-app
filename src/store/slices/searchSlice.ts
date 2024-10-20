import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SearchState = {
  searchValue: string
};

const initialState = {
  searchValue: ''
} as SearchState;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>){
      state.searchValue = action.payload
    }
  },
});

export const { setSearchValue } = searchSlice.actions

export const selectSearchValue = (state: RootState) => state.search
export default searchSlice.reducer
