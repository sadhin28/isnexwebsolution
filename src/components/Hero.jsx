import { Linkedin, Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";
import profileImg from '../assets/sadhin.jpg'
const Hero = () => {
  const handleClick = () => {
    // Open Google Drive link in a new tab
    window.open(
      'https://drive.google.com/file/d/12gSCvxHNlnV9TtDrJ3bmap7_QOcsWVbn/view?usp=sharing',
      '_blank'
    );
  };
      const scrollToSection = (id) => {
        console.log(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="home" className="">
       <div className="">
        <h1 className="text-1xl text-center text-blue-500 pt-40 pb-5">Is.Nex Web Solution</h1>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center justify-center">We Build Stunning <br />Websites That Convert</h2>
       </div>
       <div className="flex mt-10 sm:flex-row gap-20 justify-center items-center animate-fade-in-up animate-delay-400 ">
          <ReactiveButton outline
           onClick={()=>scrollToSection('projects')}  
          color="green"
          idleText=' View My Work'
          size="lerge"
          />
          <ReactiveButton
          onClick={handleClick}
          color="yellow"
          idleText='Download CV'
          size="lerge"
          />
            
           
          </div>
           {/* Social Links */}
          <div className=" mt-12 flex justify-center space-x-10 animate-fade-in-up animate-delay-600">
             <a 
              href="https://github.com/sadhin28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <GrGithub className="h-6 w-6" />
            </a>
             <a 
              href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button 
              onClick={()=>scrollToSection('contact')} 
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
    </div>
  );
};

export default Hero;
