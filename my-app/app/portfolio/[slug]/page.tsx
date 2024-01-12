"use client";
import React, {useState, useEffect} from 'react'

type Comment = {
    user: string;
    comment: string;
}

type IParams = {
		params: {
			slug: string
		}
}

export default function Home({ params: { slug } }: IParams) {
    const [isLoading, setLoading] = useState(true)
    const [portfolioData, setPortfolioData] = useState({
        image: '',
        projName: '',
        description: '',
        slug: '',
        comments: []
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    /*
    const submitData = async () => {
        const response = await fetch(`https://bootcamp-project-2023-beryl.vercel.app/api/portfolio/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatePortfolioData = await response.json();
        setPortfolioData(updatePortfolioData);

        setNewComment({
            username: '',
            comment: '',
        });
    }

    useEffect(() => {
        const fetchPortfolioData = async () => {
          const response = await fetch(`https://bootcamp-project-2023-beryl.vercel.app/api/portfolio/${slug}`);
          const data = await response.json();
          console.log("data", data)
          setPortfolioData(data);
          setLoading(false)
          console.log(portfolioData)
        };

        fetchPortfolioData();
      }, [slug]); 
*/
    return(<main>
        {isLoading ? (<p>Just a moment...</p>) :(
        <div>
        <h2>{portfolioData.projName}</h2>
        <p>
            {portfolioData.description}
        </p>
        
        </div>)}
        </main>
    )
}

/*<div>
            {portfolioData.comments?.map((comment : Comment, index: number) => (
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
        </div>*/