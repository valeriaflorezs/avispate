export type StepId =
  | "welcome"
  | "inscripcion"
  | "contexto"
  | "explicacion"
  | "juego"
  | "gracias";

export const STEP_ORDER: StepId[] = [
  "welcome",
  "inscripcion",
  "contexto",
  "explicacion",
  "juego",
  "gracias",
];

export const STEP_LABELS: Record<StepId, string> = {
  welcome: "Bienvenida",
  inscripcion: "Inscripción",
  contexto: "Contexto",
  explicacion: "Reglas",
  juego: "Juego",
  gracias: "Gracias",
};
