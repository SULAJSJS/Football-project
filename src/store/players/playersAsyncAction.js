import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async ({ id }) => {
  console.log('item', id);
  return await axios.get(`https://api.football.kg/api/v1/team/${id}/`).then((res) => {
    console.log(res.data);
    return res.data;
  });
});
