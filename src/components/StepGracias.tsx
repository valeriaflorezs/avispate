import { StepShell } from "./StepShell";
import { MascotVideo } from "./MascotVideo";
import { FormGate } from "./FormGate";
import { asset } from "../lib/assets";

const ASISTENCIA_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=ebawul-96E-1Fsa4sxfHgvHRriQghqZFgu7551fmwWVUN1lENllJVFFMRFBCTUZMMFFHM0pDMTAzVS4u";

export function StepGracias({ onBack }: { onBack?: () => void }) {
  return (
    <StepShell
      eyebrow="¡Lo lograste!"
      title="Gracias por avispate con nosotros"
      onBack={onBack}
    >
      <div data-reveal>
        <MascotVideo label="Ver mensaje de despedida" src={asset("/assets/video/cierre.mp4")} />
      </div>
      <p data-reveal style={{ maxWidth: 560 }}>
        Para cerrar tu participación es <strong>obligatorio</strong> registrar
        tu asistencia en el siguiente formulario.
      </p>
      <FormGate
        formUrl={ASISTENCIA_URL}
        confirmLabel="Ya registré mi asistencia"
        onNext={() => window.location.reload()}
        nextLabel="Finalizar ✓"
      />
    </StepShell>
  );
}
