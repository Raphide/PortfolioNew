import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Splash.module.scss";


interface SplashProps {
  setUnsplash: Dispatch<SetStateAction<boolean>>;
}

const Splash = ({ setUnsplash }: SplashProps) => {
  return (
    <div className={styles.splash}>
      <div>
        <button onClick={() => setUnsplash(false)}>Click me</button>
      </div>
    </div>
  );
};

export default Splash;
