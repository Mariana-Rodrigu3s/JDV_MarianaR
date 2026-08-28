export default function ScoreBoard({ scores, onReset }) {
  return (
    <div className="scoreboard">
      <div className="score x-score">
        <span>Jogador X</span>
        <strong>{scores.x}</strong>
      </div>
      <div className="score o-score">
        <span>Jogador O</span>
        <strong>{scores.o}</strong>
      </div>
      <div className="score tie-score">
        <span>Empates</span>
        <strong>{scores.ties}</strong>
      </div>
      <button className="reset-btn" onClick={onReset}>
        Zerar Placar
      </button>
    </div>
  );
}