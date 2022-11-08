import { createSlice } from '@reduxjs/toolkit';
import { fetchDivisions, fetchTeams } from './teamsAsyncAction';
import { getTeamsFromLS } from '../../utils/getTeamsFromLS';
import { getDivisionsFromLS } from '../../utils/getDivisionsFromLS';

const { teams } = getTeamsFromLS();
const { divisions } = getDivisionsFromLS();

const initialState = {
  teams,
  divisions,
  categoryId: null,
  status: 'loading',
  search: '',
  page: 0,
  limit: 12,
  count: null,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, action) {
      state.teams = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
    setCategotyId(state, action) {
      state.categoryId = action.payload;
    },
    setFilters(state, action) {
      state.page = action.payload.page;
      state.categoryId = action.payload.categoryId;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
  extraReducers: {
    [fetchTeams.fulfilled.type]: (state, action) => {
      state.teams = action.payload;
      state.status = 'success';
    },
    [fetchTeams.rejected.type]: (state) => {
      state.status = 'error';
    },
    [fetchTeams.pending]: (state) => {
      state.status = 'loading';
    },
    // teams ----------------
    [fetchDivisions.fulfilled.type]: (state, action) => {
      state.divisions = action.payload;
      state.status = 'success';
    },
    [fetchDivisions.rejected.type]: (state) => {
      state.status = 'error';
    },
    [fetchDivisions.pending]: (state) => {
      state.status = 'loading';
    },
    // divisions ------------
  },
});

export const { setTeams, setPage, setSearch, setValue, setFilters, setCategotyId, setCount } =
  teamsSlice.actions;
export default teamsSlice.reducer;
