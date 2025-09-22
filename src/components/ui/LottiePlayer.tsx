import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";

type Props = {
  src?: string;      // public path to .json (e.g. /animations/foo.json)
  data?: object;     // or inline JSON if you import it
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
};

export default function LottiePlayer({
  src = "/animations/integration.json",
  data,
  loop = true,
  autoplay = true,
  className,
}: Props) {
  const ref = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | undefined>(data);
  const [error, setError] = useState<string | null>(null);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && ref.current) ref.current.pause();
  }, []);

  // Load JSON if a src is provided and no inline data
  useEffect(() => {
    let cancelled = false;
    setError(null);

    if (!data && src) {
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((json) => {
          if (!cancelled) setAnimationData(json);
        })
        .catch((e) => {
          if (!cancelled) {
            setAnimationData(undefined);
            setError(e?.message ?? "Failed to load animation");
          }
        });
    } else {
      setAnimationData(data);
    }

    return () => {
      cancelled = true;
    };
  }, [data, src]);

  // Optional fallback while loading / on error
  if (!animationData) {
    return (
      <div
        className={className}
        style={{ width: 320, height: 320, display: "grid", placeItems: "center" }}
        aria-live="polite"
      >
        {error ? "Animation failed to load." : "Loading…"}
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={ref}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{ width: "100%" }}
    />
  );
}
