import { Linkedin, Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";
const Hero = () => {
  const handleClick = () => {
    // Open Google Drive link in a new tab
    window.open(
      'https://www.fiverr.com/s/kLEQDyy',
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
       <div className="md:py-10">
        <h1 className="text-1xl text-center text-blue-500 md:pt-40 pt-32  pb-5">Is.Nex Web Solution</h1>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center justify-center">We Build Stunning <br />Websites That Convert</h2>
        <h1 className="text-xl text-center text-gray-400 pt-5 ">Professional Web Design & Development Agency</h1>
       </div>
       <div className="flex mt-10 sm:flex-row gap-20 justify-center items-center animate-fade-in-up animate-delay-400 ">
          <ReactiveButton outline
           onClick={()=>scrollToSection('projects')}  
          color="blue"
          idleText='View Portfolio'
          size="lerge"
          />
          <ReactiveButton
          onClick={handleClick}
          color="yellow"
          idleText='Hire on Fiverr'
          size="lerge"
          />
            
           
          </div>
           {/* Social Links */}
          <div className=" mt-12 flex justify-center space-x-10 animate-fade-in-up animate-delay-600">
             <a 
              href="https://github.com/sadhin28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-blue-500"
            >
              <GrGithub className="h-6 w-6" />
            </a>
             <a 
              href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-blue-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button 
              onClick={()=>scrollToSection('contact')} 
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-blue-500"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
    </div>
  );
};

export default Hero;
