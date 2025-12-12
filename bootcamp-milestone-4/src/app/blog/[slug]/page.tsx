import React from "react";
import Image from "next/image";
import Link from "next/link";
import getBlogs from "@/app/blogData";
import type { Blog } from "@/database/blogSchema";
import CommentForm from "@/components/blogCommentForm";
import styles from "./page.module.css";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogs: Blog[] = await getBlogs();
  const post: Blog | undefined = blogs.find((blog) => blog.slug === "blog/" + slug);

  if (!post) return <h1 className="headline">Post not found.</h1>;

  return (
    <div className="page">
      <article className={styles.shell}>
        <div className={styles.media}>
          <Image
            src={post.image}
            alt={post.imageAlt || "blog cover"}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>
        <div className={styles.header}>
          <span className="pill">{new Date(post.date).toLocaleDateString()}</span>
          <h1 className="headline">{post.title}</h1>
          <p className="muted">{post.description}</p>
        </div>
        <div className={styles.content}>
          <p className="muted">{post.content}</p>
        </div>
        <div className={styles.comments}>
          <h3>Comments</h3>
          <CommentForm post={post} />
        </div>
        <div className={styles.backRow}>
          <Link href="/blog" className="btn btn-ghost">
            Back to blog
          </Link>
        </div>
      </article>
    </div>
  );
}
