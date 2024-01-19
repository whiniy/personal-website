import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
      <nav className = {style.nav}>
          <Link href="/home" className = {style.navTitle}>winnie's personal website</Link>
          <ul>
              <li className = {style.navA}><Link className = {style.a} href="/home">Home</Link></li>
              <li className = {style.navA}><Link className = {style.a} href="/blog">Blog</Link></li>
              <li className = {style.navA}><Link className = {style.a} href="/portfolio">Portfolio</Link></li>
               <li className = {style.navA}><Link className = {style.a} href="/resume">Resume</Link></li>
               <li className = {style.navA}><Link className = {style.a} href="/contact">Contact</Link></li>
          </ul>
      </nav>
  );
}