import { StepShell } from "./StepShell";
import { MascotVideo } from "./MascotVideo";

export function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <StepShell eyebrow="Avíspate" title="Bienvenidos al Carnaval de las raíces">
      <img
        src="/assets/img/logo.webp"
        alt="Avíspate"
        data-reveal
        style={{ width: "min(220px, 55vw)" }}
      />
      <p data-reveal style={{ maxWidth: 560, fontSize: "1.05rem", lineHeight: 1.6 }}>
        Estás a punto de iniciar un viaje por las raíces interculturales de
        Barranquilla. Dale play a nuestra mascota para comenzar la aventura.
      </p>
      <div data-reveal>
        <MascotVideo label="Reproducir bienvenida" src="/assets/video/bienvenida.mp4" />
      </div>
      <button className="btn" data-reveal onClick={onNext}>
        Comenzar el viaje →
      </button>
    </StepShell>
  );
}
