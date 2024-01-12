var blogs = [
    {
        title: "SLO Days",
        date: "August 17 - 18",
        description: "SLO Days is a two day overnight stay at Cal Poly SLO which is supposed to serve as an orientation event for incoming students. Presentations are held and food is served buffet-style.",
        slug: "blog1.html"
    },
    {
        title: "WOW Week",
        date: "September 15 - 23",
        description: "Week of Welcome is a week long event where people are grouped and go on fun trips on and off campus. It was very fun in my opinion!",
        slug: "blog2.html",
    },
];
function iterate() {
    var blogDiv = document.getElementsByClassName("blog-list")[0];
    blogs.forEach(function (blog) {
        var newDiv = document.createElement("div");
        console.log(blogDiv);
        newDiv.innerHTML = "<h2><a href = ".concat(blog.slug, ">").concat(blog.title, "</a></h2>")
            + "<h4>".concat(blog.date, "</h4>")
            + "<p>".concat(blog.description, "</p>");
        blogDiv.appendChild(newDiv);
    });
}
iterate();

