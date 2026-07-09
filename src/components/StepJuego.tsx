import { useMemo, useState } from "react";
import { StepShell } from "./StepShell";
import { BoxOpening } from "./BoxOpening";
import { CardStack } from "./CardStack";
import { CardFlip } from "./CardFlip";
import { CARDS, type CardData } from "../data/cards";

type Phase = "box" | "stack" | "card";

function shuffled(ids: number[]) {
  const arr = [...ids];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function StepJuego({
  onFinish,
  onBack,
}: {
  onFinish: () => void;
  onBack?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("box");
  const [deck, setDeck] = useState<number[]>(() =>
    shuffled(CARDS.map((c) => c.id))
  );
  const [current, setCurrent] = useState<CardData | null>(null);
  const [drawing, setDrawing] = useState(false);

  const byId = useMemo(() => {
    const m = new Map<number, CardData>();
    CARDS.forEach((c) => m.set(c.id, c));
    return m;
  }, []);

  function draw() {
    if (deck.length === 0 || drawing) return;
    setDrawing(true);
    const [nextId, ...rest] = deck;
    setTimeout(() => {
      setDeck(rest);
      setCurrent(byId.get(nextId)!);
      setDrawing(false);
      setPhase("card");
    }, 420);
  }

  function continueGame() {
    if (deck.length === 0) {
      onFinish();
      return;
    }
    setPhase("stack");
  }

  function handleBack() {
    if (phase === "card") {
      setDeck((d) => (current ? [current.id, ...d] : d));
      setPhase("stack");
    } else if (phase === "stack") {
      setPhase("box");
    } else {
      onBack?.();
    }
  }

  return (
    <StepShell eyebrow="¡Avíspate!" title={phaseTitle(phase)} onBack={handleBack}>
      {phase === "box" && <BoxOpening onOpened={() => setPhase("stack")} />}

      {phase === "stack" && (
        <CardStack
          remaining={deck.length}
          total={CARDS.length}
          onDraw={draw}
          drawing={drawing}
        />
      )}

      {phase === "card" && current && (
        <CardFlip
          card={current}
          hasMore={deck.length > 0}
          onContinue={continueGame}
          onStop={onFinish}
        />
      )}
    </StepShell>
  );
}

function phaseTitle(phase: Phase) {
  if (phase === "box") return "Abre la caja de Avíspate";
  if (phase === "stack") return "Elige una carta al azar";
  return "¡A responder!";
}
