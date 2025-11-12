import BlogPreview from '@/components/blogPreview';
import React from 'react';
import getBlogs from '@/app/blogData';

export default async function BlogPage() {

    const blogs = await getBlogs();
    if(!blogs) return <div>Failed to load blogs.</div>

    console.log(blogs)

    const blogElements =  blogs.map((blog) => 
            <BlogPreview key={blog._id} {...blog} />
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