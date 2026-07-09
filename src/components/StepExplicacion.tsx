import { StepShell } from "./StepShell";
import "./StepExplicacion.css";

export function StepExplicacion({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <StepShell eyebrow="¿Cómo se juega?" title="Reglas de Avíspate" wide onBack={onBack}>
      <div className="rules-grid" data-reveal>
        <div className="rule-card">
          <span className="rule-num">1</span>
          <p>
            Avíspate es un juego de cartas que normalmente se juega como{" "}
            <em>Headbanz</em> o <em>Sabelotodo</em>. En esta versión web solo
            está disponible el modo <strong>Sabelotodo</strong>.
          </p>
        </div>
        <div className="rule-card">
          <span className="rule-num">2</span>
          <p>Abre la caja y toma una carta al azar del mazo de 40.</p>
        </div>
        <div className="rule-card">
          <span className="rule-num">3</span>
          <p>Lee la pregunta y elige la respuesta que creas correcta.</p>
        </div>
        <div className="rule-card">
          <span className="rule-num">4</span>
          <p>
            Te mostraremos la respuesta correcta. Luego decides si{" "}
            <strong>sigues jugando</strong> o <strong>paras</strong> ahí.
          </p>
        </div>
      </div>
      <button className="btn" data-reveal onClick={onNext}>
        ¡Avíspate! →
      </button>
    </StepShell>
  );
}
