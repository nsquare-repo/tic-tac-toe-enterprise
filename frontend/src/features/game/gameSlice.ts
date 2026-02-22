import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GameState {
    board: (string | null)[];
    isXNext: boolean;
    winner: string | null;
}

const initialState: GameState = {
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        makeMove: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            if (!state.board[index] && !state.winner) {
                state.board[index] = state.isXNext ? 'X' : 'O';
                state.isXNext = !state.isXNext;
                // Winner logic will go here in a moment
            }
        },
        resetGame: () => initialState,
    },
});

export const { makeMove, resetGame } = gameSlice.actions;
export default gameSlice.reducer;