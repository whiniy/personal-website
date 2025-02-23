"use client";
import DropDown from "./dropdown";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "../dropDownNav/dropDownNav.module.css"

const NavMenu: React.FC = (): JSX.Element => {
   const router = useRouter();
   const [showDropDown, setShowDropDown] = useState<boolean>(false);
   const [isClicked, setIsClicked] = useState<boolean>(false);
   const buttonRef = useRef<HTMLButtonElement>(null);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const links = () => {
      return ["HOME", "BLOG", "PORTFOLIO", "RESUME", "CONTACT"];
   };

   const toggleDropDown = (force?: boolean) => {
      setShowDropDown(prev => (typeof force === "boolean" ? force : !prev));
   };

   const handleClick = () => {
      setIsClicked(prev => !prev);
      setShowDropDown(true);
   };

   const linkSelection = (link: string): void => {
      const formattedLink = `/${link.toLowerCase()}`;
      router.push(formattedLink);
      setShowDropDown(false);
      setIsClicked(false);

   };

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setShowDropDown(false);
            setIsClicked(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <div className = {style.buttonDiv}>
         <button 
         ref = {buttonRef}
      className = {`${showDropDown ? "active" : ""} ${style.navButton}`}
      onClick = {handleClick}
      onMouseEnter={() => !isClicked && toggleDropDown(true)}
      onMouseLeave={() => !isClicked && toggleDropDown(false)}
      >
         <p>NAVIGATE</p>
         {showDropDown && (
            <div 
            ref={dropdownRef} 
            className={style.dropdownWrapper}>
            <DropDown 
            links={links()} 
            toggleDropDown={() => toggleDropDown(false)} 
            linkSelection={linkSelection} />
            </div>
         )}
      </button>
      </div>
   );
};

export default NavMenu;