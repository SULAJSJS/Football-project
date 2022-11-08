import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCategotyId } from './teams';

export const fetchTeams = createAsyncThunk('team/fetchTeam', async (params, { dispatch }) => {
  const { limit, page, word, categoryId } = params;
  return await axios
    .get(`https://api.football.kg/api/v1/team/`, {
      params: {
        division: categoryId,
        offset: page,
        limit: limit,
        search: word,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
});

export const fetchDivisions = createAsyncThunk('divisions/fetchDivisions', async () => {
  return await axios.get(`https://api.football.kg/api/v1/team/division/`).then((res) => {
    return res.data;
  });
});

//params: {limit: limit,},
