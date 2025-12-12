import React from "react";
import BlogPreview from "@/components/blogPreview";
import getBlogs from "@/app/blogData";
import type { Blog } from "@/database/blogSchema";

export default async function BlogPage() {
  const blogs = await getBlogs();
  if (!blogs) return <div>Failed to load blogs.</div>;

  return (
    <div className="page">
      <div className="section">
        <span className="eyebrow">Blog</span>
        <h1 className="headline">Notes on craft, clarity, and building for humans</h1>
        <p className="muted">
          Short essays on design systems, motion, accessibility, and the engineering patterns that keep experiences
          resilient.
        </p>
      </div>
      <div className="grid">
        {blogs.map((blog: Blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
