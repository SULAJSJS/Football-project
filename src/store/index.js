import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import teams from './teams/teams';
import players from './players/players';
import auth from './auth/auth';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    teams,
    players,
    auth,
  },
  middleware: customizedMiddleware,
});
