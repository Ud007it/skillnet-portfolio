import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="page-container">
      <section className={styles.about}>
        <p className="eyebrow">About</p>
        <h2 className={styles.focus}>
          I care about interfaces a team can still work in six months from
          now — not just ones that ship.
        </h2>

        <p className={styles.bio}>
          I'm a frontend developer working full-time in React. The SkillNet
          feed rebuild — breaking a single monolithic component into an
          atomic, testable module — is the clearest proof of how I approach
          architecture: isolate state early, keep components small enough to
          debug on their own, and build boundaries a second developer can
          actually read.
        </p>

        <Link to="/contact" className={styles.cta}>
          Let's talk →
        </Link>
      </section>
    </div>
  );
};

export default About;
