import React from "react";
import styles from "./CareDuelBanner.module.css";

export default function CareDuelBanner() {
  return (
    <a
      href="https://careduel.com/topic-of-the-week"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.banner}
    >
      Topic of the Week
    </a>
  );
}
