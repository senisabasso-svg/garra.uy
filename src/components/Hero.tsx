import { useEffect, useRef, useState } from "react";
import { useParallaxRef } from "../hooks/useParallaxRegistry";
import styles from "./Hero.module.css";

export function Hero() {
  const bgRef = useParallaxRef<HTMLDivElement>(0.55);
  const decorRef = useParallaxRef<HTMLDivElement>(0.85, 0.02);
  const headlineRef = useParallaxRef<HTMLDivElement>(-0.12);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onError = () => setVideoOk(false);
    video.addEventListener("error", onError);
    return () => video.removeEventListener("error", onError);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.mediaWrap}>
        <div ref={bgRef} className={styles.mediaInner}>
          <div className={styles.fallbackBg} aria-hidden />
          {videoOk ? (
            <video
              ref={videoRef}
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div className={styles.overlay} aria-hidden />
        <div
          ref={decorRef}
          className={styles.decor}
          aria-hidden
        >
          <div className={styles.gridLine} />
          <div className={styles.glow} />
        </div>
      </div>

      <div className={styles.content}>
        <div
          ref={headlineRef}
          className={styles.headlineBlock}
        >
          <h1 id="hero-heading" className={styles.headline}>
            WE BUILD
            <br />
            DIGITAL EXPERIENCES.
          </h1>
          <p className={styles.subheadline}>
            Advertising, design, technology and strategy for brands that want to
            move forward.
          </p>
        </div>

        <div className={styles.ctas}>
          <a href="#contact" className="btn btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn btn-ghost">
            View our work
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
