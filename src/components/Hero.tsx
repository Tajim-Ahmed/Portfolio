
import { motion } from "framer-motion";
import { Button } from './ui/button';



const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/tajimresume08-26.pdf";
  link.download = "Tajim-Ahmed-Resume.pdf";
  link.click();
};

 const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }


const Hero = () => {

  const Intro:string = 'PowerApps & Automation Developer @ Microsoft Ecosystem , MERN Stack & Full Stack Development . Passionate about creating real-world tech solution. ';


  return (
    <div id='home' className='md:pt-20 pt-15 md:pl-15 md:pr-15 flex' >
      <div id='hero-text' className='p-5 pb-0  md:w-50%'>
      <h1 className='text-md  pb-5 md:pb-5 md:text-2xl text-foreground font-semibold black-ops-one-regular '> Available for opportunities</h1>
      <h1 className='text-3xl playwrite-gb-j md:text-8xl text-accent inline '> Building <h1 className='text-border inline'> things </h1></h1>
      <h1 className='text-4xl pb-5 md:pb-10  md:text-8xl text-border block playwrite-gb-j'> for the <h1 className='text-accent inline '>web.</h1></h1>


      <h1 className=' pt-5 text-lg md:text-4xl black-ops-one-regular font-semibold text-foreground '>Hi, I'm <h1 className='text-accent font-bold inline'>TAJIM AHMED </h1>  <h1 className='text-sm md:text-2xl playwrite-gb-j'> {Intro.split("").map((char, index) => (
        <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3 + index * 0.05, // wait 5s, then animate chars one by one
        }}
  >
    {char}
  </motion.span>
))} </h1> </h1>

  <Button onClick={downloadResume} className=' mt-5  text-primary bg-foreground border p-5  rounded '> {`-> Download Resume`}</Button>
 <Button onClick={scrollToContact}  className=' md:inline-flex flex mt-5 md:ml-10  text-foreground bg-background md:p-5  border rounded '>Get In Touch</Button>

 </div>
    </div>
  )
}

export default Hero
