// import logo from './logo.svg';
// import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { About } from "./components/About/About";
// import { ContactUs } from "./components/Contact/xxx";
// import Example from "./components/example";
import Navbar from "./components/Navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import SideBarIcons from "./components/sideIcons/SideIcons";
import AllRoutes from "./Routes/AllRoutes";
// import { Footer } from './components/Footer/Footer';

function App() {
  const home =useRef(null)
  const about =useRef(null);
  const work =useRef(null)
  const skills =useRef(null);
  const conatct =useRef(null)
  // const about =useRef(null);
 

const scrollsection=(elementref)=>{
  window.scrollTo({
    top:elementref.current.offsetTop,
    behavior: "smooth"
  })
  // <Button onClick={()=>scrollsection(home)}>Amolll</Button>
}
{/* <Button onClick={()=>scrollsection(services)}>Amolll</Button> */}
 
  return (<>
    
 <Navbar  props={{scrollsection,about,work,conatct,home,skills}} />  
   <AllRoutes props={{scrollsection,about,work,conatct,home,skills}}  />
  
   <ScrollToTop props={{scrollsection,home}} />
   <SideBarIcons />
   
   {/* <About /> */}
   
   {/* <Example /> */}
   {/* <Footer /> */}
   </>
  );
}

export default App;
