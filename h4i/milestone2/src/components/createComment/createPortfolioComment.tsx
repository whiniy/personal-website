"use client"
import React, { useState } from "react"
import style from "../createComment/createComment.module.css"


function refreshComments(){
    window.location.reload(); 
} 

export default function CreateComment(Page: any) {
    const [comment, setComment] = useState("");
    const [username, setUser] = useState("");
    const time = new Date()

    const changeUser = (event: any) => { setUser(event.target.value); }
    const changeComment = (event: any) => { setComment(event.target.value); }
    const addComment = async (event: any) => {
        event.preventDefault();
        const data = { username, comment, time };
        const response = await fetch(`/api/portfolio/${Page.slug}/comment`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        event.target.reset();
    
    }

    return (
        <div>
            <h3 className={style.addAComment}>Add a Comment!</h3>
            <form onSubmit={addComment}>
                <div>
                    <div className={style.labelContainer}>
                    <label className={style.label}>Name</label>
                    </div>
                    <div>
                    <input type="text" id="name" onChange={changeUser} className={style.input}/>
                    </div>
                </div>
                <br></br>
                <div>
                    <div className={style.labelContainer}>
                        <label className={style.label}>Comment</label>
                    </div>
                    <div>
                        <textarea id="message" onChange={changeComment} className={style.input}/>
                    </div>
                </div>
                <input type="submit" id="submit" className = {style.submit} onClick={() => refreshComments()}/>
            </form>
        </div>
    )
}