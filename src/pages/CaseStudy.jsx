import styles from "./CaseStudy.module.css";

const CaseStudy = () => {
  return (
    <div className="page-container">
      <article className={styles.article}>
        <p className="eyebrow">Case Study</p>
        <h1 className={styles.title}>SkillNet Frontend Architecture</h1>

        <div className={styles.links}>
          <a
            href="https://github.com/Ud007it/skillnet-client"
            target="_blank"
            rel="noreferrer"
          >
            Component structure → GitHub
          </a>
          <a
            href="https://skillnet-project.vercel.app/Login"
            target="_blank"
            rel="noreferrer"
          >
            Live build → Vercel
          </a>
        </div>

        <h2>The Problem</h2>
        <p>
          The initial SkillNet feed was sluggish and hard to maintain because
          the post logic, state, and UI markup were all stuffed into one
          massive, monolithic component.
        </p>

        <h2>What I Did</h2>
        <p>
          I broke the feed down into atomic, reusable React components under
          a <code>PostComponent</code> module — separate files for the header
          (<code>PostComponentHeaderLayout</code>,{" "}
          <code>PostComponentHeaderProfile</code>,{" "}
          <code>PostComponentHeaderUserName</code>), the post body (
          <code>PostComponentMid</code>, <code>PostComponentMidPost</code>),
          and interactions (<code>PostComponentInteractions</code>). I lifted
          state to prevent unnecessary re-renders and used CSS Modules for
          scoped, conflict-free styling.
        </p>
        <p>
          I noticed the problem while debugging — every child component
          depended on the parent, so tracking down a single error meant
          wading through logic that had nothing to do with the actual bug.
          Splitting it into smaller components made each piece debuggable on
          its own.
        </p>

        <h2>The Outcome</h2>
        <p>
          The refactored feed scores 91/100 on Lighthouse (desktop). Testing
          confirms state isolation: liking one post triggers a re-render only
          in that post's component — sibling posts in the feed don't
          re-render. The clean component boundaries in the GitHub repo are
          the proof — you can review the <code>PostComponent</code> module
          directly. The live Vercel deployment shows it runs.
        </p>

        <h2>What I'd Do Differently Next Time</h2>
        <p>
          I'd implement a custom hook for data fetching earlier, to separate
          API logic from the UI layer from day one.
        </p>
      </article>
    </div>
  );
};

export default CaseStudy;
