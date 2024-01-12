type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "SLO Days",
        date: "08/17/2023",
        description: "Blog 1",
        slug: "blog1.html"
    },

    {
        title: "WOW Week",
        date: "09/15/2023",
        description: "Blog 2",
        slug: "blog2.html",
    },
];

function iterate() {
    const blogDiv = document.getElementsByClassName("blog-list")[0];
   
    blogs.forEach((blog) => {
        const newDiv = document.createElement("div");
        console.log(blogDiv);
       
        newDiv.innerHTML = `<h2><a href = ${blog.slug}>${blog.title}</a></h2>`
        + `<h4>${blog.date}</h4>`
        + `<p>${blog.description}</p>`;


        blogDiv.appendChild(newDiv);
    });

}

iterate();



    
    
        
    
