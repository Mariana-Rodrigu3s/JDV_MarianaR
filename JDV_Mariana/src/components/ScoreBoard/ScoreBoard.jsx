import styles from './score.module.css'

export default function ScoreBoard({ scores, onReset }) {
  return (
    <div className={styles.scoreboard}>
      <div className={`${styles.score} ${styles['xScore']}`}>
        <span>Jogador 🌸</span>
        <strong>{scores.x}</strong>
      </div>
      <div className={`${styles.score} ${styles['oScore']}`}>
        <span>Jogador 🏹</span>
        <strong>{scores.o}</strong>
      </div>
      <div className={`${styles.score} ${styles['tieScore']}`}>
        <span>Empates</span>
        <strong>{scores.ties}</strong>
      </div>
      <button className={styles['resetBtn']} onClick={onReset}>
        Zerar Placar
      </button>
    </div>
  );
}