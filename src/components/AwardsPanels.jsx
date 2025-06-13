import React, { useState } from "react";
import styles from "./AwardsPanels.module.css";

const panels = [
  {
    title: "🏆 Vote Top216",
    url: "https://top216.com/vote",
    description: "Cast your vote for the best!",
  },
  {
    title: "✨ Explore TheTop36",
    url: "https://thetop36.com/highlights",
    description: "Discover top highlights.",
  },
];

export default function AwardsPanels() {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  return (
    <div className={styles.container}>
      {panels.map((panel, i) => (
        <a
          key={i}
          href={panel.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${
            hoveredPanel === i ? styles.cardHover : ""
          }`}
          onMouseEnter={() => setHoveredPanel(i)}
          onMouseLeave={() => setHoveredPanel(null)}
        >
          <h2 className={styles.title}>{panel.title}</h2>
          <p className={styles.description}>{panel.description}</p>
          <button className={styles.button}>Visit</button>
        </a>
      ))}
    </div>
  );
}
