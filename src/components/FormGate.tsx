import { useState } from "react";
import "./FormGate.css";

export function FormGate({
  formUrl,
  confirmLabel,
  onNext,
  nextLabel,
}: {
  formUrl: string;
  confirmLabel: string;
  onNext: () => void;
  nextLabel: string;
}) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="form-gate" data-reveal>
      <div className="form-gate-frame">
        <iframe title="Formulario Avíspate" src={formUrl} allowFullScreen />
      </div>
      <a className="form-gate-link" href={formUrl} target="_blank" rel="noreferrer">
        ¿No ves el formulario? Ábrelo en una pestaña nueva ↗
      </a>
      <label className="form-gate-check">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
        />
        <span>{confirmLabel}</span>
      </label>
      <button className="btn" disabled={!confirmed} onClick={onNext}>
        {nextLabel}
      </button>
    </div>
  );
}
