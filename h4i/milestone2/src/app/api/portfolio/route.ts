import { NextResponse } from "next/server";
import connectDB from "../../../../backend/helpers/db";
import ProjectS from "../../../../backend/database/projectSchema";

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectS.find().sort({ date: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json({ message: "Error loading projects" }, { status: 500 });
  }
}
