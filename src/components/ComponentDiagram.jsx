import styles from "./ComponentDiagram.module.css";

// A literal nested-box rendering of the actual PostComponent module tree.
// This is the real component structure from skillnet-client, not a stylized stand-in.
const ComponentDiagram = () => {
  return (
    <div className={styles.diagram} role="img" aria-label="Nested component structure: PostComponentLayout containing PostComponentHeaderLayout, PostComponentMid, and PostComponentDesc">
      <div className={styles.layout}>
        <span className={styles.tag}>PostComponentLayout</span>

        <div className={styles.row}>
          <div className={styles.header}>
            <span className={styles.tag}>PostComponentHeaderLayout</span>
            <div className={styles.leaf}>PostComponentHeaderProfile</div>
            <div className={styles.leaf}>PostComponentHeaderUserName</div>
          </div>

          <div className={styles.mid}>
            <span className={styles.tag}>PostComponentMid</span>
            <div className={styles.leaf}>PostComponentMidPost</div>
          </div>
        </div>

        <div className={styles.desc}>
          <span className={styles.tag}>PostComponentDesc</span>
        </div>
      </div>
    </div>
  );
};

export default ComponentDiagram;
