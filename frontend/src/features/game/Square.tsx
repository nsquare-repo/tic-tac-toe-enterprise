import React from 'react';

interface SquareProps {
    value: string | null;
    onClick: () => void;
    isWinningSquare?: boolean;
}

export const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            onClick={onClick}
            className={`
        w-24 h-24 text-3xl font-bold flex items-center justify-center
        transition-all duration-200 border-2
        ${isWinningSquare
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'}
        shadow-sm rounded-lg active:scale-95
      `}
        >
            {value}
        </button>
    );
};