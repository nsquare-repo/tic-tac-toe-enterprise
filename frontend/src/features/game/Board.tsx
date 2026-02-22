import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { makeMove, resetGame } from './gameSlice';
import { Square } from './Square';

export const Board: React.FC = () => {
    const { board, isXNext, winner } = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();

    const handleSquareClick = (index: number) => {
        dispatch(makeMove(index));
    };

    return (
        <div className="flex flex-col items-center gap-6 p-8 bg-slate-50 rounded-2xl shadow-xl">
            <div className="text-xl font-semibold text-slate-700">
                {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
            </div>

            <div className="grid grid-cols-3 gap-3">
                {board.map((value, index) => (
                    <Square
                        key={index}
                        value={value}
                        onClick={() => handleSquareClick(index)}
                    />
                ))}
            </div>

            <button
                onClick={() => dispatch(resetGame())}
                className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
            >
                Reset Enterprise Match
            </button>
        </div>
    );
};