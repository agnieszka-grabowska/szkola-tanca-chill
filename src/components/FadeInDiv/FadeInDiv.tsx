"use client";

import React from "react";
import styles from "./FadeInDiv.module.css";

export default function FadeInDiv({
  children,
  from = "right",
}: {
  children?: React.ReactNode;
  from?: "top" | "bottom" | "left" | "right" | "center";
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const style = {
    "--translateX": from === "left" ? "-20px" : from === "right" ? "20px" : "0",
    "--translateY": from === "top" ? "-20px" : from === "bottom" ? "20px" : "0",
    "--scale": from === "center" ? "0.9" : "1",
  } as React.CSSProperties;

  return (
    <div ref={ref} className={styles.initial} style={style}>
      {children}
    </div>
  );
}
