import { createSlice } from '@reduxjs/toolkit';
import { fetchPlayers } from './playersAsyncAction';

const initialState = {
  data: localStorage.getItem('players') || [],
  status: 'loading',
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers(state, action) {
      state.players = action.payload;
    },
  },
  extraReducers: {
    [fetchPlayers.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
      state.status = 'success';
    },
    [fetchPlayers.rejected.type]: (state) => {
      state.status = 'error';
    },
    [fetchPlayers.pending]: (state) => {
      state.status = 'loading';
    },
  },
});

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
