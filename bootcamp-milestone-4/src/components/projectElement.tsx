import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/database/projectSchema";
import ProjectCommentForm from "./projectCommentForm";
import styles from "./projectElement.module.css";

export default function ProjectElement(props: Project) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={props.image || "/images/headshot.jpg"}
          alt={props.title}
          fill
          sizes="(max-width: 768px) 100vw, 540px"
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{props.title}</h3>
          <Link className={styles.link} href={props.link}>
            View project →
          </Link>
        </div>
        <p className="muted">{props.description}</p>
        <div className={styles.metaRow}>
          <span className="pill">Design + Build</span>
          <span className="pill">Live link</span>
        </div>
        <div className={styles.commentsBlock}>
          <div className={styles.commentHeader}>
            <p className="muted">Thoughts & feedback</p>
          </div>
          <ProjectCommentForm proj={props} />
        </div>
      </div>
    </article>
  );
}
