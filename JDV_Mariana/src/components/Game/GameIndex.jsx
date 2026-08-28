import { useState } from 'react';
import Board from '../Board/Board';
import ScoreBoard from '../ScoreBoard/ScoreBoard'; // Importe o ScoreBoard

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 }); // Estado do Placar

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // Checa se o jogo terminou nessa jogada para computar o ponto
    const winner = calculateWinner(nextSquares);
    const isDraw = !winner && nextSquares.every((square) => square !== null);

    if (winner === 'X') {
      setScores((prev) => ({ ...prev, x: prev.x + 1 }));
    } else if (winner === 'O') {
      setScores((prev) => ({ ...prev, o: prev.o + 1 }));
    } else if (isDraw) {
      setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
    }
  }

  function handleResetScores() {
    setScores({ x: 0, o: 0, ties: 0 });
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? 'Ir para jogada #' + move : 'Ir para o início';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <ScoreBoard scores={scores} onReset={handleResetScores} />
      
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}