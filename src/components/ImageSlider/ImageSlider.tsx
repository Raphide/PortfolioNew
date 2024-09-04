import React, { useState } from "react";
import styles from "./ImageSlider.module.scss";
import HeadLeft from "../../assets/HeadLeft.svg";
import HeadRight from "../../assets/HeadRight.svg";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";

const ImageSlider = ({}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === projects.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return projects.length - 1;
      return index - 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {projects.map((project, index) => (
          <div
            className={styles.image}
            key={index}
            style={{ translate: `${-100 * imageIndex}%` }}
          ><div className={styles.card}>
              <img src={project.picture} className={styles.picture} />
            <div className={styles.content}>
              <h1>{project.title}</h1>
              <span><h3>Tech Stack: </h3><p>{project.stack.join(", ")}</p></span>
              <p>{project.description}</p>
              <a href={project.github} target="_blank"><p>GitHub Link</p></a>
            </div></div>
          </div>
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className={styles.button}
        style={{ left: "0" }}
      >
        prev
      </button>
      <button
        onClick={showNextImage}
        className={styles.button}
        style={{ right: "0" }}
      >
        next
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {projects.map((_, index) => (
          <button
            key={index}
            className={styles.dotButtons}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? `${index + 1}` : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
