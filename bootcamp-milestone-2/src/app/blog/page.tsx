import BlogPreview from '@/components/blogPreview';
import React from 'react';
import blogs from '@/app/blogData';
  

const blogElements =  blogs.map((blog) => 
            <BlogPreview {...blog} />
    );

export default function BlogPage() {

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