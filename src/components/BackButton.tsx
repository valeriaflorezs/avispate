import "./BackButton.css";

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="back-button" onClick={onClick} aria-label="Regresar al paso anterior">
      ← Volver
    </button>
  );
}
