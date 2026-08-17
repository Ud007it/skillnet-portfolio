import { Link } from "react-router-dom";
import ComponentDiagram from "../components/ComponentDiagram";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="page-container">
      <section className={styles.hero}>
        <p className="eyebrow">Frontend Developer</p>
        <h1 className={styles.claim}>
          I build maintainable, component-driven React interfaces — see for
          yourself in the SkillNet repo.
        </h1>

        <ComponentDiagram />

        <p className={styles.caption}>
          The actual component tree from the SkillNet feed, pulled directly
          from the repo — not a mockup.
        </p>

        <Link to="/case-study" className={styles.cta}>
          See the case study →
        </Link>
      </section>
    </div>
  );
};

export default Hero;
