import styles from "./styles.module.scss";
import image1 from "./i1.jpeg";
import image2 from "./i2.jpg";
import image3 from "./i3.jpg";

import Lenis from "lenis";

export const SmoothScroll = () => {
  const lenis = new Lenis({
    autoRaf: true,
    easing: (t) => t * (2 - t),
    smoothWheel: true,
    duration: 1.2,
  });

  return (
    <main>
      <div className={styles.container}>
        <img src={image1} className={styles.i1} />
        <img src={image2} className={styles.i2} />
        <img src={image3} className={styles.i3} />
      </div>
    </main>
  );
};
