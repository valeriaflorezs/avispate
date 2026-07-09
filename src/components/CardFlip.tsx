import { useEffect, useState } from "react";
import type { CardData } from "../data/cards";
import "./CardFlip.css";

export function CardFlip({
  card,
  onContinue,
  onStop,
  hasMore,
}: {
  card: CardData;
  onContinue: () => void;
  onStop: () => void;
  hasMore: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setFlipped(false);
    setSelected(null);
    const t = setTimeout(() => setFlipped(true), 450);
    return () => clearTimeout(t);
  }, [card.id]);

  const answered = selected !== null;

  return (
    <div className="card-flip-wrap">
      <div className={"card-flip" + (flipped ? " is-flipped" : "")}>
        <div className="card-face card-face--back">
          <img src="/assets/img/card-back.webp" alt="" />
        </div>

        <div className="card-face card-face--front">
          <div className="card-front-art">
            <img src={`/assets/cards/${card.id}.webp`} alt={card.title} />
          </div>
          <div className="card-front-panel">
            <p className="card-front-title">{card.title}</p>
            <p className="card-front-question">{card.question}</p>

            <div className="card-front-options">
              {card.options.map((opt, i) => {
                let state = "";
                if (answered) {
                  if (i === card.correctIndex) state = "correct";
                  else if (i === selected) state = "wrong";
                }
                return (
                  <button
                    key={i}
                    className={"card-option" + (state ? ` is-${state}` : "")}
                    disabled={answered}
                    onClick={() => setSelected(i)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="card-front-feedback">
                {selected === card.correctIndex ? (
                  <p className="feedback-ok">¡Correcto! 🎉</p>
                ) : (
                  <p className="feedback-bad">
                    La respuesta correcta era:{" "}
                    <strong>{card.options[card.correctIndex]}</strong>
                  </p>
                )}
                <div className="card-front-actions">
                  <button className="btn" onClick={onContinue} disabled={!hasMore}>
                    {hasMore ? "Seguir jugando →" : "Ya no hay más cartas"}
                  </button>
                  <button className="btn btn-ghost" onClick={onStop}>
                    Parar aquí
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
