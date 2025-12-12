import BlogPreview from '@/components/blogPreview';
import React from 'react';
import getBlogs from '@/app/blogData';
import type { Blog } from '@/database/blogSchema';

export default async function BlogPage() {

    const blogs = await getBlogs();
    if(!blogs) return (<div>Failed to load blogs.</div>);

    console.log(blogs)

    const blogElements =  blogs.map((blog: Blog) => 
            <BlogPreview key={blog.title} {...blog} />
    );
    
    return (
        <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", maxWidth: "2000px"}}>
            <div style={{display: "inline-flex"}}>
                {blogElements}
            </div>
        </div>
        </>
    );
    
    
}