import styles from "./demoHeader.module.scss";

function DemoHeader() {
  return (
    <div className={styles.demoHeader}>
      <h1>For demonstration purposes, use the following credentials:</h1>
      <div className={styles.container}>
        <span>Email: demo@demo.com</span>
        <span>Password: 123456</span>
      </div>
    </div>
  );
}

export default DemoHeader;
