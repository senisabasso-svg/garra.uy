import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastY = window.scrollY;
    const onScroll = () => {
      const velocity = Math.min(
        Math.abs(window.scrollY - lastY) * 0.02,
        0.4,
      );
      lastY = window.scrollY;
      track.style.setProperty("--marquee-speed", `${38 / (1 + velocity)}s`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section} aria-label="Statement">
      <div className={styles.inner}>
        <div ref={trackRef} className={styles.track} aria-hidden>
          <div className={styles.row}>
            <span>IDEAS THAT MOVE BRANDS FORWARD.</span>
            <span>IDEAS THAT MOVE BRANDS FORWARD.</span>
          </div>
        </div>
        <p className={styles.tags}>
          Strategy / Creative / Technology / Performance
        </p>
      </div>
    </section>
  );
}
