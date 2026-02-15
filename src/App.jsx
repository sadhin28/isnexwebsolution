import './App.css'
import About from './components/About'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import GitHubContributions from './components/Githubcontributions'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
function App() {

  return (
    <>
     <div className='bg-gradient-to-br from-[#101521] via-[#101521] to-[#101521] text-white'>
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <GitHubContributions></GitHubContributions>
       <ContactForm></ContactForm>
       <Footer></Footer>
     </div>
    </>
  )
}

export default App
