"use client";
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

    return (
    <main>
        {isLoading ? (
            <p>Just a moment...</p>
        ) :
        (<div>
        <h2>{blogData.title}</h2>
        <h3>Date: {blogData.date}</h3> 
        <p>{blogData.content}</p>
        </div>)}
    </main>
    )
}