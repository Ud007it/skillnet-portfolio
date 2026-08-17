import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="page-container">
      <section className={styles.contact}>
        <p className="eyebrow">Contact</p>
        <h2 className={styles.heading}>Let's connect</h2>

        <div className={styles.linksList}>
          <a href="mailto:uditmistry948@gmail.com" className={styles.linkRow}>
            <span className={styles.label}>Email</span>
            <span>uditmistry948@gmail.com</span>
          </a>
          <a
            href="https://github.com/Ud007it"
            target="_blank"
            rel="noreferrer"
            className={styles.linkRow}
          >
            <span className={styles.label}>GitHub</span>
            <span>github.com/Ud007it</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
