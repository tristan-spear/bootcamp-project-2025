import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

// export interface ProjectType {
//     title: string;
//     date: string,
//     description: Date | string,
//     image: string,
//     imgAlt: string,
//     slug: string
// }


async function getProjects(){
	await connectDB() // function from db.ts before
	try {
			// query for all Projects and sort by date
	    const Projects = await Project.find().sort({ date: -1 }).orFail()
			// send a response as the Projects as the message
	    return JSON.parse(JSON.stringify(Projects));
	} catch (err) {
        //console.log("What the fuuuuck")
	    return null
	}
}


export default getProjects;