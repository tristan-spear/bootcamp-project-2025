import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

// export interface blogType {
//     title: string;
//     date: string,
//     description: Date | string,
//     image: string,
//     imgAlt: string,
//     slug: string
// }


async function getBlogs(){
	await connectDB() // function from db.ts before
	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return JSON.parse(JSON.stringify(blogs));
	} catch (err) {
        //console.log("What the fuuuuck")
	    return null
	}
}

// const blogs = getBlogs()

// const blogs: Blog[] = [
//     {
//         title: "Cardistry",
//         date: "10/16/2025",
//         description: "I began practicing cardistry in 2016. I stopped for a few years, but recently got back into it. I find it very satisfying, and I love learning new flourishes.",
//         image: "/images/cardistry2.jpg",
//         imgAlt: "cardistry photo",
//         slug: "blog/cardistry",
//     },
//     {
//         title: "Reading",
//         date: "10/16/2025",
//         description: "I believe that reading is a very important habit for everyone to have. I think that choosing to be a lifelong learner is one of the most valuable decisions that one could make. Becoming a devout reader is one of the simplest and most powerful ways to do this. My favorite book is 'Outwitting the Devil' by Napoleon Hill.",
//         image: "/images/books.jpg",
//         imgAlt: "photo of books",
//         slug: "blog/reading"
//     },
//     {
//         title: "Horseback Riding",
//         date: "10/16/2025",
//         description: "This is my horse, King. I grew up around horses but only recently started riding. I love riding, especially taking my horse to new trails and exploring nature that way!",
//         image: "/images/horseback.jpg",
//         imgAlt: "photo of me riding a horse",
//         slug: "blog/horseback-riding"
//     },
//     {
//         title: "Aerial Photography",
//         date: "10/16/2025",
//         description: "I got a drone a little over a year ago, and while I'm not a professional, my drone is! I take my drone with me when I travel and take photos of nature to document the places I go.",
//         image: "/images/truckee-photo.jpeg",
//         imgAlt: "drone photo",
//         slug: "blog/drone"
//     }
// ];

export default getBlogs;