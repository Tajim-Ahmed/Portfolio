//import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';



// export default function App() {
//   return (
//     <div className="flex gap-1">
      // {text.split("").map((char, index) => (
      //   <motion.span
      //     key={index}
      //     initial={{ opacity: 0 }}
      //     animate={{ opacity: 1 }}
      //     transition={{
      //       delay: index * 0.05,
      //     }}
      //   >
      //     {char}
      //   </motion.span>
      // ))}
//     </div>
//   );
// }


const Navbar = () => {

  const [isDark, setIsDark] = useState(true);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.getElementById('theme').classList.toggle('dark');
};


  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const scrollToSkills = () => {
    document.getElementById("Skills")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  const scrollToProjects = () => {
    document.getElementById("project")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const text:string = "<Tajim Ahmed />";


  return (
    <div  className=' flex z-10 fixed bg-background h-15 justify-center w-full p-2 md:p-2'>
      <h1 className='hidden md:block md:flex-1 md:pl-5 font-bold text-4xl text-border black-ops-one-regular  '> {text.split("").map((char, index) => (
      
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
             ))} 
       </h1>  

      <ul className='flex items-center md:text-xl gap-1 md:gap-5 text-sm text-border md:pr-10 lg:pr-10  black-ops-one-regular fond-bold'>
        
        <li className=' hover:text-accent border border-transparent transition-all duration-200 ' onClick={scrollToHome}>Home</li>
        <li className='hover:text-accent border border-transparent transition-all duration-200 ' onClick={scrollToAbout}>About</li>
        <li className='hover:text-accent border border-transparent transition-all duration-200 '  onClick={scrollToProjects}>Projects</li>
        <li className='hover:text-accent border border-transparent transition-all duration-200 '  onClick={scrollToSkills}>Skills</li>
        <li className='hover:text-accent border border-transparent transition-all duration-200 ' onClick={scrollToContact}>Contact</li>

      <li><button
  onClick={toggleTheme}
  // aria-label="Toggle theme"
  style={{
    background: 'transparent',
    // border: '1px solid rgba(245,230,200,0.2)',
    // borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // color: '#f5e6c8',
    transition: 'border-color 0.3s ease',
  }}

  className=" border-accent  rounded-full   "
>
  {isDark ? (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ) : (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )}
</button></li>
      </ul>

    </div>
  )
}

export default Navbar
