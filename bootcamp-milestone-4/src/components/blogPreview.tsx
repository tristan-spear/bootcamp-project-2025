import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/database/blogSchema";
import styles from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={props.image || "/images/headshot.jpg"}
          alt={props.imageAlt || "blog cover"}
          fill
          sizes="(max-width: 768px) 100vw, 340px"
        />
      </div>
      <div className={styles.body}>
        <p className="card-meta">{new Date(props.date).toLocaleDateString()}</p>
        <h3>{props.title}</h3>
        <p className="muted">{props.description}</p>
        <Link className={styles.link} href={props.slug}>
          Read more →
        </Link>
      </div>
    </article>
  );
}
