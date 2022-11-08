import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import teams from './teams/teams';
import players from './players/players';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    teams,
    players,
  },
  middleware: customizedMiddleware,
});
