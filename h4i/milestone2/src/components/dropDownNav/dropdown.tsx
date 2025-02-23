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
      {links.map((link: string, index: number) => (
         <div
         key = {index}
         onClick = {() => {
            linkSelection(link);
            toggleDropDown();
         }}
         className = {style.links}
         >
            <div>{link}</div>
         </div>
      ))}
   </div>
   
);
};

export default DropDown;