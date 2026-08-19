import React from 'react'
import Photo from "@/assets/Tajim_img.png"


const About = () => {
  return (
    <div id='about' className='md:pl-15 md:pr-15 p-5 md:pt-10' >
      <h2  className=' text-sm md:p-5 pt-5 pb-2 font-bold text-accent black-ops-one-regular ' > WHO  I  AM</h2>
      <h1 className='  text-xl md:text-4xl md:pl-5 text-border black-ops-one-regular '><span className='   decoration-foreground md:text-5xl  underline-offset-4' >A </span> <span className=''>little bit</span> <span className='text-foreground playwrite-gb-j'>about me </span> </h1>
    
    <div className='md:flex pt-5 h-fit '>
      <div id="right" className=' '>
        <div id="img"className=' justify-center flex align-center items-center w-100% md:w-100 ' >
        <img src={Photo} className='border-2 rounded h-50 hover:border-accent overflow-hidden md:h-100  ' alt="Tajim's Image" />
        <div id="img-highlight"></div>
        </div>
      </div>

      <div id="left" className=' '>
        <div id="bio" className=' text-border mt-5 md:mt-0 text-xs md:text-lg playwrite-gb-j '>
        <span> <h1> Graduated in BE Computer Science specialized in <h1 className='text-accent inline'> (IoT & Cybersecurity)</h1> , batch of 2026, with hands-on experience in MERN stack web development. </h1> <br className='md:inline ' /> <h1>Skilled in building full-stack applications using <span className='text-accent inline'> ( React, Node.js, Express, and MongoDB.</span></h1> <br className='md:inline ' /> <h1 ><span className='text-accent inline'>  Proficient in C++, PHP, and Java basics ) </span> with 1+ year of Working experience in microsoft environment <span className='text-foreground black-ops-one-regular  font-semibold inline'>(PowerApps:- Canvas, Model-Driven, codex etc ; Sharepoint:- communication, Team sites, SPFx, custom scripting etc ; Power Automate :- instant, cloud, sheduled flows, connectors etc ; Dataverse:- relationships, forms, packages etc )</span> </h1> <br className='md:inline ' /> Passionate about <span className='text-accent inline'>  developing scalable web solutions </span> and continually improving technical expertise.</span>
        </div>
        <div id="softskills">

        </div> 
      </div>
  </div>
      
      
    </div>
  )
}

export default About
