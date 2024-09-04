import React from "react";
import styles from "./AboutPage.module.scss"
import portrait from "../../assets/portrait.jpg"
const AboutPage = () => {
  return (
    <div className={styles.content}>
      <img src={portrait} className={styles.portrait}/>
      <div className={styles.text}>
        <h1>About me</h1>
      <p>
      Hello, I'm Atlas and I am a Sydney based artist turned software developer with over 10 years of experience in the retail industry. With my passion for art, I'm all about good looking design, that's also a little bit fun and I love the idea of incorporating interactivity and art, so I felt like tech was naturally the best avenue for me to take to explore this idea.
      </p>
      <p>In 1992 I was (tragically) born a baby. Eventually, after a lot of personal development, I became a 32 year old man with big ambitions but no real direction in my life. I eventually quit my stable retail job to try my hand at coding and web-development. Turns out I really enjoy it and it's reignited my passion for art and creation. </p>
      <br />
      <p>
        On this site you'll be able to look through the various works in my
        portfolio and find my contact information.
      </p></div>
    </div>
  );
};

export default AboutPage;
