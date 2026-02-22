import { Board } from './features/game/Board';

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-8">
          Tic-Tac-Toe <span className="text-blue-600">Enterprise</span>
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;