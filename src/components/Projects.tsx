
import Powerapp from '@../../../src/assets/powerapp-leaveapp.jpg'
import { Button } from './ui/button'

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { skills } from "@/lib/skills";

import SkillCard from "@/components/SkillCard";

const Projects = () => {
  return (
    <div id='project' className='md:pl-15 md:pr-15 p-5 md:pb-0 md:pt-10 ' >
      <div>
        <h2  className=' text-sm md:p-5 pt-5 md:pb-2  font-bold text-accent black-ops-one-regular ' > WHAT I'VE BUILD</h2>
      <h1 className='  text-xl md:text-4xl md:pl-5 pb-3 md:pb-0 text-border black-ops-one-regular '><span className=''>MY</span> <span className='text-foreground playwrite-gb-j'>Projects</span> </h1>
      </div>

      <div id='firstproject' className="md:hover:border-3 border hover:border-accent w-full h-fit rounded flex flex-col md:flex-row overflow-clip  md:m-5  ">
       
        <div id="right" className='w-full md:w-1/2  p-4'> 
        <h1 className='black-ops-one-regular text-xs md:text-xl text-border'>FEATURED PROJECT</h1>
        <h1 className='playwrite-gb-j font-semibold md:font-bold mb-2 md:text-2xl text-foreground'>MERN E-Commerce Platform</h1>
        <h1 className='black-ops-one-regular text-xs md:text-2xl text-accent'>Full Stack Web Application - three-tier architecture</h1>
        <br className=' md:inline' />
        <h1 id="des" className='text-border ' >A production-ready e-commerce platform built with the MERN stack, featuring a customer storefront, dedicated admin dashboard, and secure backend API. Users can browse products, manage carts, authenticate with JWT, and place orders, while administrators manage inventory, product images, and orders through a protected dashboard.</h1> <br className='hidden md:inline' />
        <h1 id="Hig" className='hidden md:block text-border ' >Designed as three independent applications—a React storefront, React admin panel, and Express REST API—to create a scalable architecture. Cloudinary handles media uploads, MongoDB Atlas stores application data, and JWT authentication secures both customer and administrator access.     </h1>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>ReactJS</Button>
        <Button className='rounded text-primary bg-foreground border  ml-3 mt-3'>Node.js</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Express</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>MongoDB</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>JWT</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>Cloudinary</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Tailwind CSS</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3 '>Vercel</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>REST API</Button>
        {/* <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>REST API</Button> */}
        

        
        </div>
        <div id="left" className="w-full md:w-1/2 justify-center align-middle  flex flex-col  p-4"> 
            <div className="rounded hover:border-red-600 bg-transparent dark:bg-white  overflow-hidden border-3">
           <iframe
                src="https://greatstack-e-com-frontend.vercel.app/"
                 className="w-full h-52  md:h-72"
            ></iframe>
           </div>
           
           <div className="  w-full inline-flex flex-row mt-5  justify-center items-center   ">
            {/* <h1 className='text-border mt-5' >Live Project Link Here:-  */}
              <a className='text-accent  align-middle inline  ' href="https://greatstack-e-com-frontend.vercel.app/"> <Button className='text-black bg-foreground rounded mr-5 ' >🌐 Live Priview </Button> </a>
             {/* </h1> */}
            {/* <h1 className='text-border mt-5' >Check Out Github:-  */}
              <a className='text-accent align-middle  inline' href="https://github.com/Tajim-Ahmed/greatstack-e-com"> <Button className='text-black bg-foreground rounded' >🔗 Github </Button></a> 
              {/* </h1> */}
              </div>
        </div>
      
      </div>

      <div id='secondDiv' className="w-full h-fit md:ml-5 flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 hover:border  md:pl-5 md:hover:border-3 md:mr-5 mt-3 md:mt-0 p-4 rounded hover:border-accent  ">
           <h1 className='black-ops-one-regular text-xs md:text-xl text-border'>SECOND PROJECT</h1>
        <h1 className='playwrite-gb-j font-semibold md:font-bold mb-2 md:text-2xl text-foreground'>Tradegram </h1>
        <h1 className='black-ops-one-regular text-xs md:text-2xl text-accent'>Social Media Web Application</h1>
        <br className=' md:inline' />
        <h1 id="des" className='text-border ' >Tradegram is a full-stack social media platform inspired by modern photo-sharing applications, designed to provide users with a seamless experience for connecting, sharing, and discovering content. The platform enables users to create secure accounts, publish image-based posts, interact through likes and comments, explore user profiles, and engage with a responsive social feed. </h1> <br className='hidden md:inline' />
        <h1 id="Hig" className='hidden md:block text-border ' >To enhance the user experience, the application incorporates Firebase Authentication for secure user registration and login, Cloudinary for efficient cloud-based image storage, and Leaflet Maps to support location-based features, allowing users to associate posts with geographical locations and visualize them interactively on a map. Built with a responsive React frontend and a scalable Express backend, the application demonstrates modern full-stack development practices, emphasizing performance, security, and maintainable architecture.   </h1>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>ReactJS</Button>
        <Button className='rounded text-primary bg-foreground border  ml-3 mt-3'>Node.js</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Express</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>MongoDB</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>FireBase Auth</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>Cloudinary</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Tailwind CSS</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3 '>Leaflet Maps</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>REST API</Button>
        <a className='text-accent  align-middle inline   ' href="https://tajim-ahmed.github.io/Tradegram/"> <Button className='text-black bg-white  rounded mt-3 md:mt-0  ml-3 ' >🌐 Live Priview </Button> </a> 
              <a className='text-white align-middle  inline' href="https://github.com/Tajim-Ahmed/Tradegram"> <Button className='text-black bg-white mt-3 md:mt-0 ml-3  rounded' >🔗 Github </Button></a> 
          </div>


          <div className="w-full md:w-1/2 hover:border md:hover:border-3 p-4 mt-3 md:mt-0 rounded hover:border-accent  ">
          <h1 className='black-ops-one-regular text-xs md:text-xl text-border'> THIRD PROJECT</h1>
        <h1 className='playwrite-gb-j font-semibold md:font-bold mb-2 md:text-2xl text-foreground'>GenV - Bag Store </h1>
        <h1 className='black-ops-one-regular text-xs md:text-2xl text-accent'>Mobile-First Business Management Application</h1>
        <br className=' md:inline' />
        <h1 id="des" className='text-border ' >GenV is a mobile-first web application developed for a real retail business to streamline day-to-day operations and improve inventory management. Designed with a focus on usability and performance, the application enables staff to efficiently manage products, monitor stock availability, track business records, and perform operational tasks directly from their mobile devices.
       </h1> <br className='hidden md:inline' />
        <h1 id="Hig" className='hidden md:block text-border ' >Built entirely with HTML, CSS, and JavaScript, the application demonstrates how modern browser technologies can deliver a fast, responsive, and reliable user experience without relying on frontend frameworks. The interface is optimized for mobile devices, allowing employees to use the application comfortably in a real shop environment where speed and accessibility are essential.   </h1>
        
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>HTML5</Button>
        <Button className='rounded text-primary bg-foreground border  ml-3 mt-3'>CSS3</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>JavaScript (ES6)</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>Responsive Design</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>Mobile-First UI</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>GitHub Pages</Button>
  
        <a className='text-accent  align-middle inline  ' href="https://tajim-ahmed.github.io/genv/"> <Button className='text-black bg-white  rounded mr-3 mt-3 ml-3 ' >🌐 Live Priview </Button> </a> 
              <a className='text-white align-middle  inline' href="https://github.com/Tajim-Ahmed/genv"> <Button className='text-black bg-white ml-3 mt-3 rounded' >🔗 Github </Button></a> 
          </div>
      </div>

       <div id='ThirdDiv' className="md:hover:border-3 mt-3  border  hover:border-accent w-full h-fit rounded flex flex-col md:flex-row overflow-clip  md:m-5 mb-0 md:mb-0  ">

        <div id="left" className="w-full md:w-1/2 justify-center align-middle  flex flex-col  p-4"> 
            <div className="rounded hover:border-red-600 bg-transparent dark:bg-white  overflow-hidden border-2  ">
           <img src={Powerapp} alt="Powerapp application" />
           </div>
           
           <div className="  w-full inline-flex flex-row mt-5  justify-center items-center   ">
            {/* <h1 className='text-border mt-5' >Live Project Link Here:-  */}
              <a className='text-accent  align-middle inline  ' href="https://www.microsoft.com/en-in/power-platform/products/power-apps"> <Button className='text-black bg-foreground rounded mr-5 ' > POWERAPP</Button> </a>
             {/* </h1> */}
            {/* <h1 className='text-border mt-5' >Check Out Github:-  */}
              <a className='text-accent align-middle  inline' href="https://www.microsoft.com/en-in/microsoft-365"> <Button className='text-black bg-foreground rounded' >  M-365 </Button></a> 
              {/* </h1> */}
              </div>
        </div>

        <div id="right" className='w-full md:w-1/2  p-4'> 
        <h1 className='black-ops-one-regular text-xs md:text-xl text-border'>MICROSOFT POWER PLATFORM PROJECT</h1>
        <h1 className='playwrite-gb-j font-semibold md:font-bold mb-2 md:text-2xl text-foreground'>Leave Management application </h1>
        <h1 className='black-ops-one-regular text-xs md:text-2xl text-accent'>Intranet powerapp application for organizations</h1>
        <br className=' md:inline' />
        <h1 id="des" className='text-border ' >A business-focused leave management application developed using Microsoft <span className='font-bold text-foreground'> Power Apps, SharePoint, and Power Automate </span> to digitize and streamline the employee leave request process. The application enables employees to submit leave requests, monitor leave balances, track approval status, and review their leave history through a modern, responsive interface.</h1> <br className='hidden md:inline' />
        <h1 id="Hig" className='hidden md:block text-border ' >The application was built using Canvas Power Apps as the frontend with SharePoint Online serving as the primary data source. Business logic and approval workflows were implemented through Power Automate, enabling automated notifications, approval routing, status tracking, and data synchronization without requiring manual intervention.  </h1>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>Power Apps</Button>
        <Button className='rounded text-primary bg-foreground border  ml-3 mt-3'>SharePoint Online</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Power Automate</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>Microsoft 365</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3'>Canvas Apps</Button>
        <Button className='rounded text-primary bg-foreground border ml-3 mt-3'>Responsive UI</Button>
        <Button id='Skills' className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>Approval Workflow</Button>
        {/* <Button className='rounded text-primary bg-foreground border ml-3 mt-3 '>Vercel</Button>
        <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>REST API</Button> */}
        {/* <Button className='rounded text-white bg-accent hover:bg-foreground hover:text-black border ml-3 mt-3 '>REST API</Button> */}
    </div>
       
      </div>

    <div className='h-fit ' >
      <h2  className=' text-lg md:p-3 md:pb-0 pt-3  font-bold text-accent black-ops-one-regular ' > Technical toolbox</h2>
      <h1 className='  text-xl md:text-4xl md:pl-3  md:pb-0 text-border black-ops-one-regular '><span className=''>Skills & </span> <span className='text-foreground playwrite-gb-j'>Technologies</span> </h1>
     
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            
          }),
        ]}
      >
        <CarouselContent>
          {skills.map((skill) => (
            <CarouselItem
              key={skill.title}
              className="basis-full md:h-100 h-fit md:basis-1/2 p-5 pt-3  lg:basis-1/3"
            >
              <SkillCard skill={skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='md:flex hidden' />
      <CarouselNext className=' md:flex hidden' />
      </Carousel>
    </div>
      


    </div>
  )
}

export default Projects
