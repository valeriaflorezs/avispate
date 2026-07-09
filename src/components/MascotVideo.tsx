import { useRef, useState } from "react";
import "./MascotVideo.css";

export function MascotVideo({ label, src }: { label: string; src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = ended ? 0 : v.currentTime;
    v.play();
    setPlaying(true);
    setEnded(false);
  }

  return (
    <div className="mascot-video">
      <video
        ref={videoRef}
        src={src}
        playsInline
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
        }}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button className="mascot-video-overlay" onClick={play} aria-label={label}>
          <span className="mascot-video-play">▶</span>
          <span>{ended ? "Ver de nuevo" : label}</span>
        </button>
      )}
    </div>
  );
}
