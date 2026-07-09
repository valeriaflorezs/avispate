import { StepShell } from "./StepShell";
import "./StepContexto.css";

export function StepContexto({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack?: () => void;
}) {
  return (
    <StepShell eyebrow="Un poco de contexto" title="La Gran Parada de Tradición" onBack={onBack}>
      <p data-reveal style={{ maxWidth: 600 }}>
        Nuestro proyecto usa como activo cultural{" "}
        <strong>La Gran Parada de Tradición</strong>, uno de los desfiles más
        auténticos del Carnaval de Barranquilla. Mira este video para entender
        de dónde nace todo lo que vas a jugar hoy.
      </p>
      <div className="video-frame" data-reveal>
        <iframe
          src="https://www.youtube.com/embed/JRSN0NygEGM"
          title="La Gran Parada de Tradición"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <button className="btn" data-reveal onClick={onNext}>
        Ya vi el video, seguir →
      </button>
    </StepShell>
  );
}
