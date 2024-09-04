
import styles from "./ContactPage.module.scss"
import linkedIn from "../../assets/linkedin.svg"
import gitHub from "../../assets/github.svg"

const ContactPage = () => {
  return (
    <div>
      
      <div className={styles.inner}>
        <div className={styles.contact}>
          <span id="header-contact" className="content-column">
            <h3>Please send through a message via the form below</h3>

            <form action="https://formspree.io/f/xayrrkqg" method="POST" className={styles.form}>
              <label>Your Full Name:</label>

              <input type="text" name="fullName" required />

              <label> Your email:</label>

              <input type="email" name="email" required />

              <label> Your message:</label>

              <textarea name="message" required ></textarea>

              <button type="submit" className="button button--submit">
                Send
              </button>
            </form>
          </span>

          <span id="weblinks">
            <h3>Or find me here</h3>
            <span id="links">
              <a href="https://github.com/Raphide">
                <img
                  src={gitHub}
                  className={styles.icon}
                  id="github"
                  alt="github logo"
                />
              </a>
              <img
                src={linkedIn}
                className={styles.icon}
                id="linkedin"
                alt="linkedin logo"
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
