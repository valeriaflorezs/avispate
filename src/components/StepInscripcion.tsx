import { StepShell } from "./StepShell";
import { FormGate } from "./FormGate";

const INSCRIPCION_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=ebawul-96E-1Fsa4sxfHgvHRriQghqZFgu7551fmwWVUN0dOOVIzRTVaWTg0VEJJU0JRWU0yNlNNSy4u";

export function StepInscripcion({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <StepShell eyebrow="Paso obligatorio" title="Inscríbete a la actividad" onBack={onBack}>
      <p data-reveal style={{ maxWidth: 560 }}>
        Antes de continuar, es <strong>obligatorio</strong> diligenciar el
        formulario de inscripción. Complétalo abajo y luego marca la casilla
        para seguir con el recorrido.
      </p>
      <FormGate
        formUrl={INSCRIPCION_URL}
        confirmLabel="Ya diligencié el formulario de inscripción"
        onNext={onNext}
        nextLabel="Continuar →"
      />
    </StepShell>
  );
}
