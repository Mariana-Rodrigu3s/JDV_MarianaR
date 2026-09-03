import styles from './square.module.css'

export default function Square({ value, onSquareClick }) {

  const displayValue = value === 'X' ? '🌸' : value === 'O' ? '🏹' : null;
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {displayValue}
    </button>
  );
}