import connectDB from "../../../../backend/helpers/db"
import BlogS from "../../../../backend/database/blogSchema"
import style from "../page.module.css"

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
    await connectDB()
    try {
	    const blog = await BlogS.findOne({slug}).orFail()
	    return blog
	} catch (err) {
	    return null
	}
}

export default async function SlugBlog(prps: Props) {
    const slugBlog = await getBlog(prps.params.slug);

    if (slugBlog == null) {
        return (
            <div>
                <h2>Error finding %{prps.params.slug}!</h2>
            </div>
        ) 
    } else {
        return (
            <div className={style.container}>
                <h2 className={style.title}>{slugBlog.title}</h2>
                <h3 className={style.date}>{slugBlog.date}</h3>
                <br></br>
                <p>{slugBlog.content}</p>
            </div>
        )
    }
}