import connectDB from "../../../../backend/helpers/db";
import BlogS from "../../../../backend/database/blogSchema";
import style from "../page.module.css";
import Image from "next/image";
import Comment from "@/components/comment/comment";
import { IComment } from "../../../../backend/database/blogSchema";
import CreateComment from "@/components/createComment/createBlogComment";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  await connectDB();
  try {
    const blog = await BlogS.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function SlugBlog(prps: Props) {
  const slugBlog = await getBlog(prps.params.slug);

  if (slugBlog == null) {
    return (
      <div>
        <h2>Error finding %{prps.params.slug}!</h2>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <h2 className={style.blogTitle}>{slugBlog.title}</h2>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
          className={style.homePic}
          src={slugBlog.image}
          alt={slugBlog.alt}
        ></Image>
        <h3 className={style.date}>{slugBlog.date}</h3>
        <br></br>
        <p className={style.content}>{slugBlog.content}</p>
        <br></br>
        <CreateComment slug={slugBlog.slug} content={"blog"} />
        <br></br>
        <div className={style.commentsContainer}>
          <h3 className={style.commentsTitle}>Comments!</h3>
          {slugBlog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}
