import { BrowserRouter } from "react-router-dom"

import { About,Navbar,Hero,Tech,Experience,Works,Feedbacks,Contact,
  EarthCanvas,BallCanvas,ComputersCanvas,StarsCanvas } from "./components"


  
export default function App() {




  return (

    <BrowserRouter>
         <div className="z-0 relative bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar /> 
            <Hero />
         </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0 ">
            <Contact />
            <StarsCanvas />
          </div>


          </div>
    </BrowserRouter>


)



}