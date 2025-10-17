var blogContainer = document.querySelector(".post-container");
var posts = [
    {
        title: "Cardistry",
        date: "10/16/2025",
        description: "I began practicing cardistry in 2016. I stopped for a few years, but recently got back into it. I find it very satisfying, and I love learning new flourishes.",
        image: "./images/cardistry2.jpg",
        imgAlt: "cardistry photo",
        slug: "./posts/cardistry.html",
    },
    {
        title: "Reading",
        date: "10/16/2025",
        description: "I believe that reading is a very important habit for everyone to have. I think that choosing to be a lifelong learner is one of the most valuable decisions that one could make. Becoming a devout reader is one of the simplest and most powerful ways to do this. My favorite book is 'Outwitting the Devil' by Napoleon Hill.",
        image: "./images/books.jpg",
        imgAlt: "photo of books",
        slug: "./posts/reading.html"
    },
    {
        title: "Horseback Riding",
        date: "10/16/2025",
        description: "This is my horse, King. I grew up around horses but only recently started riding. I love riding, especially taking my horse to new trails and exploring nature that way!",
        image: "./images/horseback.jpg",
        imgAlt: "photo of me riding a horse",
        slug: "./posts/horseback-riding.html"
    },
    {
        title: "Drone Photography",
        date: "10/16/2025",
        description: "I got a drone a little over a year ago, and while I'm not a professional, my drone is! I take my drone with me when I travel and take photos of nature to document the places I go.",
        image: "./images/truckee-photo.jpeg",
        imgAlt: "drone photo",
        slug: "./posts/drone.html"
    }
];
posts.forEach(function (blog) {
    var img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imgAlt;
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    blogDiv.onclick = function () {
        window.location.href = blog.slug;
    };
    var heading = document.createElement("h1");
    heading.textContent = blog.title;
    var content = document.createElement("p");
    content.textContent = blog.description;
    blogDiv.appendChild(heading);
    blogDiv.appendChild(img);
    blogDiv.appendChild(content);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
