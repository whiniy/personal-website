import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../backend/helpers/db";
import BlogS, {IComment} from "../../../../../backend/database/blogSchema";

type IParams = {
    params: {
        slug: string;
    };
};

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
    try {
        const { username, time, comment }: IComment = await req.json()
        if (!username || !time || !comment) {
            return NextResponse.json("Invalid Comment!", { status: 400 });
        }
        const blog = await BlogS.findOneAndUpdate({slug: slug}, {$push: {comments: {username: username, time: time, comment: comment}}})
        console.log("Success: Comment Added")
        return NextResponse.json("Comment Added!", { status: 200 });
    } 

    catch (err) {
        return NextResponse.json("Comment Not Added!", { status: 400 });
    }
}