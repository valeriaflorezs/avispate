import { motion, AnimatePresence } from "framer-motion";
import { asset } from "../lib/assets";
import "./CardStack.css";

export function CardStack({
  remaining,
  total,
  onDraw,
  drawing,
}: {
  remaining: number;
  total: number;
  onDraw: () => void;
  drawing: boolean;
}) {
  const visibleCount = Math.min(5, Math.max(remaining, 1));
  const layers = Array.from({ length: visibleCount });

  return (
    <div className="card-stack-wrap">
      <div className="card-stack">
        <AnimatePresence>
          {layers.map((_, i) => {
            const depth = visibleCount - 1 - i;
            return (
              <motion.div
                key={i}
                className="card-stack-layer"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: depth * -6,
                  x: depth * 5,
                  rotate: depth === 0 ? 0 : (i % 2 === 0 ? -1 : 1) * depth * 2.2,
                  scale: 1 - depth * 0.02,
                }}
                exit={
                  depth === 0
                    ? { x: 260, y: -60, rotate: 24, opacity: 0, transition: { duration: 0.5 } }
                    : { opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                style={{ zIndex: 10 - depth }}
              >
                <img src={asset("/assets/img/card-back.webp")} alt="" draggable={false} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <p className="card-stack-count">
        Cartas restantes: <strong>{remaining}</strong> / {total}
      </p>

      <button className="btn" onClick={onDraw} disabled={drawing || remaining === 0}>
        {drawing ? "Repartiendo…" : "Toma una carta al azar"}
      </button>
    </div>
  );
}
