"use client";
import BlogPreview from '../../components/blogPrev';
import Link from "next/link";
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Blog from '../../../database/blogSchema';
import React, {useState, useEffect} from 'react'

type IParams = {
    params: {
        slug: string
    }
}

type Comment = {
    user: string;
    comment: string;
    time: string;
}

export default function Home({ params: {slug}}: IParams) {
    const [isLoading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState({
        title: '',
        date: '',
        content:'',
        comments: [],
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    const submitData = async () => {
        const response = await fetch(`https://bootcamp-project-2023-wooly.vercel.app/api/blog/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatedBlogData = await response.json();
        setBlogData(updatedBlogData);

        setNewComment({
            username: '',
            comment: '',
        });
    }


    useEffect(() => {
        const fetchBlogData = async () => {
          const response = await fetch(`https://bootcamp-project-2023-wooly.vercel.app/api/blog/${slug}`);
          const data = await response.json();
          console.log("data", data)
          setBlogData(data);
          setLoading(false)
        };

        fetchBlogData();
      }, [slug]); 

    return (
    <main>
        {isLoading ? (
            <p>Just a moment...</p>
        ) :
        (<div>
        <h2>{blogData.title}</h2>
        <h3>Date: {blogData.date}</h3> 
        <p>{blogData.content}</p>
        <div>
            {blogData.comments?.map((comment : Comment, index: number) => (
                    <div key = {index}> 
                        <p>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
            ))}
            <div>
                <form>
                    <div>
                    <label>Name:   </label>
                    <textarea id="userName"
                        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        required/>
                    </div>
                    <div>
                    <label>Comment:   </label>
                    <textarea
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        required/>
                    </div>
                    <div>
                        <button type="button" onClick={submitData}>Submit Comment</button>
                    </div>
                </form>
            </div>
        </div>
        </div>)}
    </main>
    )
}