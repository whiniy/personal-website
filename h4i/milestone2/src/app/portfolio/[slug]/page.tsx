import connectDB from "../../../../backend/helpers/db";
import ProjectS from "../../../../backend/database/projectSchema";
import style from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import CreateComment from "@/components/createComment/createPortfolioComment";
import Comment from "@/components/comment/comment";
import { IComment } from "../../../../backend/database/projectSchema";
import NavMenu from "@/components/dropDownNav/navMenu";

type Props = {
  params: { slug: string };
};

async function getProject(slug: string) {
  await connectDB();
  try {
    const project = await ProjectS.findOne({ slug }).orFail();
    return project;
  } catch (err) {
    return null;
  }
}

export default async function SlugProject(prps: Props) {
  const slugProject = await getProject(prps.params.slug);

  if (slugProject == null) {
    return (
      <div>
        <h2>Error finding %{prps.params.slug}!</h2>
      </div>
    );
  } else {
    return (
      <div>
      <div><NavMenu/></div>
      <div>
        <h2>{slugProject.title}</h2>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
          src={slugProject.image}
          alt={slugProject.alt}
        ></Image>
        <br></br>
        <br></br>
        <p>{slugProject.content}</p>
        <Link
          href={slugProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT PROJECT!
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CreateComment slug={slugProject.slug} content={"project"} />

        <div>
          <h3>Comments!</h3>
          {slugProject.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
      </div>
    );
  }
}
