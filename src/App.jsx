import { BrowserRouter } from "react-router-dom"

import { About,Navbar,Hero,Tech,Works,Feedbacks,Contact,
  StarsCanvas } from "./components"


  
export default function App() {




  return (

    <BrowserRouter>
         <div className="z-0 relative bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar /> 
            <Hero />
         </div>
          <About />
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