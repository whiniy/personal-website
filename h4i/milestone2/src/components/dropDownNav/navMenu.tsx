"use client";
import DropDown from "./dropdown";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "../dropDownNav/dropDownNav.module.css"

const NavMenu: React.FC = (): JSX.Element => {
   const router = useRouter();
   const [showDropDown, setShowDropDown] = useState<boolean>(false);
   const links = () => {
      return ["home", "blog", "portfolio", "resume", "contact"];
   };

   const toggleDropDown = () => {
      setShowDropDown(!showDropDown);
   };

   const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
      if (event.currentTarget === event.target) {
         setShowDropDown(false);
      }
   };

   const linkSelection = (link: string): void => {
      router.push(`/${link}`);

   };

   return (
      <div className = {style.buttonDiv}>
         <button 
      className = {`${showDropDown ? "active" : undefined} ${style.navButton}`}
      onClick = {(): void => toggleDropDown()}
      onBlur = {(e: React.FocusEvent<HTMLButtonElement>): void =>
         dismissHandler(e)
      }
      >
         <p>NAVIGATE</p>
         {showDropDown && (
            <DropDown
            links = {links()}
            toggleDropDown = {(): void => toggleDropDown()}
            linkSelection = {linkSelection}
            />
         )}
      </button>
      </div>
   );
};

export default NavMenu;