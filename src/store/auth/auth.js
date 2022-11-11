import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  user: {},
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    setAccount(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.id = null;
      state.token = null;
      state.email = null;
    },
  },
  //   extraReducers: {
  //     [fetchTeams.fulfilled.type]: (state, action) => {
  //       state.teams = action.payload;
  //       state.status = 'success';
  //     },
  //     [fetchTeams.rejected.type]: (state) => {
  //       state.status = 'error';
  //     },
  //     [fetchTeams.pending]: (state) => {
  //       state.status = 'loading';
  //     },
  //   },
});

export const { setUser, removeUser, setAccount } = userSlice.actions;
export default userSlice.reducer;
