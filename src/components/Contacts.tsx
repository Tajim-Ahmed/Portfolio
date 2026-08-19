import React from 'react'
import { Button } from './ui/button'

const Contacts = () => {
  return (
    <div id='contact' className='md:pl-10 md:pr-10 p-5 md:pb-5' >
      <div>
        <h2  className=' text-sm md:p-5 md:pb-0 pt-5  font-bold text-accent black-ops-one-regular ' > LETS TALK</h2>
      <h1 className='  text-xl md:text-4xl md:pl-5 pb-3 md:pb-0 text-border black-ops-one-regular '><span className=''>Get In</span> <span className='text-foreground playwrite-gb-j'>Touch</span> </h1>
      </div>
      <div id='firstproject' className="md:hover:border-3 border-1  hover:border-accent w-full h-fit rounded flex flex-col md:flex-row overflow-clip  md:m-5  ">
       
        <div id="right" className='w-full md:w-1/3  p-4'> 
        <h1 className=' font-bold text-border pl-2' >Open to opportunities & collaborations</h1>
        <h1 className='text-sm text-foreground p-2 playwrite-gb-j'>Whether you have a project in mind, an opportunity to discuss, or just want to say hello, my inbox is always open. I'll do my best to get back to you within a day.</h1>
       <a href="mailto:tajimahmed360@gmail.com"> <Button className='w-full border-2 mb-2  text-white dark:bg-accent rounded-[0.5rem] bg-primary-foreground '> tajimahmed360@mail.com</Button></a>
      <a href="https://github.com/Tajim-Ahmed"><Button className='w-full border-2 mb-2 text-white dark:bg-accent rounded-[0.5rem] bg-primary-foreground '> Github.com</Button></a> 
      
     <a href="https://www.linkedin.com/in/tajimahmed-softwaredeveloper/"> <Button className='w-full border-2 mb-2 dark:bg-accent text-white rounded-[0.5rem] bg-primary-foreground '>  Linkedin.com </Button></a>

        </div>
        <div id="left" className="w-full hover:border-foreground md:w-2/3 justify-center md:rounded align-middle md:m-1 p-3 flex flex-col  p-4"> 
            {/* can use field-group */}
            {/* <h1 className='text-4xl text-accent' >Github Stats</h1> */}
            <img className=''
            src="https://streak-stats.demolab.com?user=Tajim-Ahmed&theme=transparent&border=0px" />
            


        </div>
      
      </div>
    </div>
  )
}

export default Contacts
