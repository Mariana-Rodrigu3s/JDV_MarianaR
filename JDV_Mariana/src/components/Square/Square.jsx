import styles from './square.module.css'

export default function Square({ value, onSquareClick }) {

  const displayValue = value === 'X' ? '🌸' : value === 'O' ? '🏹' : null;

  const getSquareStyle = () => {
  
    if (value === 'X') {
      return `${styles.square} ${styles.squareFlower}`;
    }

    if (value === 'O') {
      return `${styles.square} ${styles.squareBow}`;
    }
  
    return styles.square;
  };

  return (
    <button 
      className={getSquareStyle()} 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
