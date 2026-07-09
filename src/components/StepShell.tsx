import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { BackButton } from "./BackButton";
import "./StepShell.css";

export function StepShell({
  eyebrow,
  title,
  children,
  wide,
  onBack,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
  onBack?: () => void;
}) {
  const ref = useReveal<HTMLDivElement>([title]);

  return (
    <section className={"step-shell" + (wide ? " step-shell--wide" : "")} ref={ref}>
      {onBack && (
        <div className="step-back" data-reveal>
          <BackButton onClick={onBack} />
        </div>
      )}
      {eyebrow && (
        <p className="step-eyebrow" data-reveal>
          {eyebrow}
        </p>
      )}
      <h1 className="step-title" data-reveal>
        {title}
      </h1>
      <div className="step-body" data-reveal>
        {children}
      </div>
    </section>
  );
}
