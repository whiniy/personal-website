"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import style from "./page.module.css";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={style.heartButton}
      aria-label="Like"
    >
      <Heart
        className={`${style.heartIcon} ${liked ? style.liked : ""}`}
        fill={liked ? "currentColor" : "none"}
      />
    </button>
  );
}
