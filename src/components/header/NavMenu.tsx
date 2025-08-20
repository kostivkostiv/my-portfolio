'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import cn from 'classnames';


const navItems = [
  { label: "Resume", link: "/resume" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const NavMenu = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex gap-6 items-center">
        {navItems.map((item) => {
           const isActive = pathName === item.link

          return (
            <li
              key={item.label}
              className="pl-6 border-l first:border-none first:pl-0"
            >
              <Link
                href={item.link}
                className={cn(
                  "text-lg font-medium",
                  "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-900 after:transition-all after:duration-900 after:ease-in-out",
                  
                  {
                    "text-black hover:text-yellow-900 transition-all ease-in-out duration-300  ": !isActive,
                    "hover:after:w-full": !isActive,                 
                    "text-yellow-900 after:w-full": isActive,        
                  }
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
