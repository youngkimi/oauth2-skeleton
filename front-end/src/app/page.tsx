"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = async () => {
    console.log("click");
    try {
      const response = await fetch("/api/v1/auth/oauth2/kakao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("로그인 요청 실패");
      }
      const data = await response.json();
      console.log("로그인 성공: " + data);
    } catch (error) {
      console.error("로그인 에러: ", error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.button} onClick={handleClick}></div>
    </main>
  );
}
