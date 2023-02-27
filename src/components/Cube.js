import React from "react";
import styles from "../styles/Cube.module.css";

const Cube = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.face1}`}></div>
        <div className={`${styles.face} ${styles.face2}`}></div>
        <div className={`${styles.face} ${styles.face3}`}></div>
        <div className={`${styles.face} ${styles.face4}`}></div>
        <div className={`${styles.face} ${styles.face5}`}></div>
        <div className={`${styles.face} ${styles.face6}`}></div>
      </div>
    </div>
  );
};

export default Cube;
