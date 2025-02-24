import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const PreventMouseScroll = () => {
  const scrollCounter = useRef(0);
  const isLocked = useRef(true);
  const [locked, setLocked] = useState(isLocked.current);
  const [counter, setCounter] = useState(scrollCounter.current);

  // Unified scroll prevention handler
  const handleScroll = (e) => {
    if (isLocked.current) {
      e.preventDefault();
      e.stopPropagation();

      // Count wheel events only
      if (e.type === "wheel") {
        scrollCounter.current += 1;
        setCounter(scrollCounter.current);
        console.log("Scroll attempts:", scrollCounter.current);

        if (scrollCounter.current >= 5) {
          isLocked.current = false;
          setLocked(isLocked.current);
        }
      }
    }
  };

  useEffect(() => {
    // Add event listeners with capture phase
    const options = { passive: false, capture: true };
    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("touchmove", handleScroll, options);

    return () => {
      window.removeEventListener("wheel", handleScroll, options);
      window.removeEventListener("touchmove", handleScroll, options);
    };
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <h1>Prevent Mouse Scroll</h1>
        <p>
          This demo prevents mouse scroll after 5 attempts. Scroll attempts:
          {counter}
        </p>
        <h3>{locked ? "Scroll is locked" : "Scroll is unlocked"}</h3>
      </div>
    </main>
  );
};
