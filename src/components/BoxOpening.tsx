import { useRef, useState } from "react";
import { animate } from "animejs";
import "./BoxOpening.css";

export function BoxOpening({ onOpened }: { onOpened: () => void }) {
  const [opening, setOpening] = useState(false);
  const lidRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  function openBox() {
    if (opening) return;
    setOpening(true);

    animate(boxRef.current!, {
      translateY: [0, -10, 0, -6, 0],
      duration: 500,
      easing: "easeInOutSine",
    });

    animate(lidRef.current!, {
      rotateX: [0, -25, -115],
      translateY: [0, -14, -70],
      duration: 900,
      delay: 350,
      easing: "easeInOutQuad",
    });

    animate(glowRef.current!, {
      opacity: [0, 1],
      scale: [0.4, 1.8],
      duration: 700,
      delay: 550,
      easing: "easeOutQuad",
      complete: () => onOpened(),
    });
  }

  return (
    <div className="box-opening">
      <button
        className="box-opening-stage"
        onClick={openBox}
        aria-label="Abrir la caja de Avíspate"
      >
        <div className="box-glow" ref={glowRef} />
        <div className="box-3d" ref={boxRef}>
          <div className="box-lid" ref={lidRef}>
            <img src="/assets/img/logo.webp" alt="" />
          </div>
          <div className="box-base">
            <img src="/assets/img/avispa-3d.webp" alt="" className="box-bee" />
          </div>
        </div>
      </button>
      {!opening && (
        <p className="box-hint">Toca la caja para abrirla ✨</p>
      )}
    </div>
  );
}
