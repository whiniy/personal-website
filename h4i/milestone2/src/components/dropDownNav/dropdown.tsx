import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import style from "../dropDownNav/dropDownNav.module.css"

type DropDownProps = {
   links: string[];
   toggleDropDown: () => void;
   linkSelection: (link: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({
   links,
   toggleDropDown,
   linkSelection,
}: DropDownProps) : JSX.Element => {

return (
   <div className = {style.dropdown}>
      <ul>
      {links.map((link: string, index: number) => (
         <li
         key = {index}
         onClick = {() => {
            linkSelection(link);
            toggleDropDown();
         }}
         className = {style.links}
         >
            <div>{link}</div>
         </li>
      ))}
   </ul>
   </div>
   
);
};

export default DropDown;