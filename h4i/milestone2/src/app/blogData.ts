export interface BlogPreview {
    slug: string;
    title: string;
    date: string;
    description: string;
};

const blogPosts: BlogPreview[] = [
    {
        slug: "blog1",
        title: "SLO Days",
        date: "2023-09-17",
        description: "This is how my orientation at Cal Poly went.",
    },
    {
        slug: "blog2",
        title: "WOW Week",
        date: "2023-10-15",
        description: "My first two weeks at Cal Poly were so fun!",
    },
];

export default blogPosts;
