import { useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { StepWelcome } from "./components/StepWelcome";
import { StepInscripcion } from "./components/StepInscripcion";
import { StepContexto } from "./components/StepContexto";
import { StepExplicacion } from "./components/StepExplicacion";
import { StepJuego } from "./components/StepJuego";
import { StepGracias } from "./components/StepGracias";
import { STEP_ORDER, type StepId } from "./steps";
import { asset } from "./lib/assets";
import "./App.css";

function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const step: StepId = STEP_ORDER[stepIndex];

  function goNext() {
    setStepIndex((i) => Math.min(i + 1, STEP_ORDER.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const onBack = stepIndex > 0 ? goBack : undefined;

  return (
    <div className="app-shell">
      <div
        className="pattern-bg"
        style={{ backgroundImage: `url(${asset("/assets/img/patron.webp")})` }}
      />
      <ProgressBar current={step} />
      <main className="app-main" key={step}>
        {step === "welcome" && <StepWelcome onNext={goNext} />}
        {step === "inscripcion" && <StepInscripcion onNext={goNext} onBack={onBack} />}
        {step === "contexto" && <StepContexto onNext={goNext} onBack={onBack} />}
        {step === "explicacion" && <StepExplicacion onNext={goNext} onBack={onBack} />}
        {step === "juego" && <StepJuego onFinish={goNext} onBack={onBack} />}
        {step === "gracias" && <StepGracias onBack={onBack} />}
      </main>
    </div>
  );
}

export default App;
