import { useState } from "react";
import styles from "./Splash.module.scss";
import github from "../../assets/github-brands-solid.svg";
import linkedIn from "../../assets/linkedin-brands-solid.svg";

const SplashV2 = () => {
  const [unsplash, setUnsplash] = useState<boolean>(true);

  const splashStyle =
    unsplash === true ? `${styles.splash__show}` : `${styles.splash__hide}`;

  return (
    <div className={splashStyle}>
      <div className={styles.inner}>
        <span>
          <a href="https://github.com/Raphide" target="_blank">
            <img src={github} />
          </a>
          <div>
            <h1>Atlas Usic</h1>
            <button onClick={() => setUnsplash(!unsplash)}>Enter</button>
          </div>
          <a href="https://www.linkedin.com/in/atlas-usic-60a195313/" target="_blank">
            <img src={linkedIn} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SplashV2;
