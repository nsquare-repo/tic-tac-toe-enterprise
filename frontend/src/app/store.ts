import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

// These two lines are the "Source of Truth" for your hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;