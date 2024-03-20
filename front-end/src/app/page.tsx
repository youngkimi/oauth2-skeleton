"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    window.location.href = "http://localhost:8081/api/v1/auth/oauth2/kakao";
  };

  return (
    <main className={styles.main}>
      <div className={styles.button} onClick={handleClick}></div>
    </main>
  );
}
