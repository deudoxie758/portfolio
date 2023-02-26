import React from "react";
import styles from "../styles/Cube.module.css";

const Cube = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.face1}`}>1</div>
        <div className={`${styles.face} ${styles.face2}`}>2</div>
        <div className={`${styles.face} ${styles.face3}`}>3</div>
        <div className={`${styles.face} ${styles.face4}`}>4</div>
        <div className={`${styles.face} ${styles.face5}`}>5</div>
        <div className={`${styles.face} ${styles.face6}`}>6</div>
      </div>
    </div>
  );
};

export default Cube;
