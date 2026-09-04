import { useState } from 'react';
import Swal from 'sweetalert2';
import Board from '../Board/Board';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import styles from './game.module.css';

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
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const winner = calculateWinner(nextSquares);
    const isDraw = !winner && nextSquares.every((square) => square !== null);

    if (winner === 'X') {
      const newXScore = scores.x + 1;
      if (newXScore >= 5) {
        showVictoryAlert('Jogador 🌸');
      } else {
        setScores((prev) => ({ ...prev, x: newXScore }));
      }
    } else if (winner === 'O') {
      const newOScore = scores.o + 1;
      if (newOScore >= 5) {
        showVictoryAlert('Jogador 🏹');
      } else {
        setScores((prev) => ({ ...prev, o: newOScore }));
      }
    } else if (isDraw) {
      setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
    }
  }

  // Alerta customizado com SweetAlert2
  function showVictoryAlert(winnerName) {
    Swal.fire({
      title: 'Parabéns!',
      text: `${winnerName} atingiu 5 pontos e venceu a partida!`,
      icon: 'success',
      confirmButtonText: 'Recomeçar Jogo',
      confirmButtonColor: '#9B68D5',
      background: '#F2E3FA',
      color: '#333333',
    }).then(() => {
      resetFullGame();
    });
  }

  // Zera o placar e o tabuleiro simultaneamente
  function resetFullGame() {
    setScores({ x: 0, o: 0, ties: 0 });
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
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
    <div className={styles.game}>
      <ScoreBoard scores={scores} onReset={resetFullGame} />
      
      <div className={styles.gameContent}>
        <div className={styles.gameBoard}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        
        <div className={styles.gameInfo}>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}