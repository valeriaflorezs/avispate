import { STEP_ORDER, STEP_LABELS, type StepId } from "../steps";
import "./ProgressBar.css";

export function ProgressBar({ current }: { current: StepId }) {
  const idx = STEP_ORDER.indexOf(current);

  return (
    <nav className="progress-bar" aria-label="Progreso de la actividad">
      {STEP_ORDER.map((step, i) => (
        <div
          key={step}
          className={
            "progress-dot" +
            (i === idx ? " is-active" : "") +
            (i < idx ? " is-done" : "")
          }
        >
          <span className="progress-dot-mark">{i < idx ? "✓" : i + 1}</span>
          <span className="progress-dot-label">{STEP_LABELS[step]}</span>
        </div>
      ))}
    </nav>
  );
}
