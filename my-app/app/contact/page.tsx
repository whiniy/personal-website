import style from "./contact.module.css";
import React from "react";

export default function Contact() {
    return (
        <main>
          <h1 className = {style.page_title}></h1>
          <form id="contact_form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required/>

              <label htmlFor="email">Email</label>
              <input type="email" id="email" required/>

              Message<textarea></textarea>
              <input type="submit" required/>
          </form>
        </main>
    );
}