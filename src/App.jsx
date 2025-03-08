import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AboutMe from './components/AboutMe'
import Workingwithevent from './components/Workingwithevent'
import Workingwithvar from './components/Workingwithvar'
import Incrementdecrement from './components/Incrementdecrement'
import Calculater from './components/Calculater'
import UsingReference from './UsingReference'
import UsingReference1 from './Usingreference1'
import Calculate from './Calculate'
import Electricitybill from './Electricitybill'
import Valuewithstate from './components/Valuewithstate'
import Task from './components/Task'
import Itemmanager from './components/Itemmanager'
import {Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import { Link } from 'react-router'
import Projects from './components/Projects'
import Stateeg1 from './components/Stateeg1'
function App() {
 

  return (
    <>
       <Stateeg1></Stateeg1>

    <Navbar></Navbar>
    
    <Routes>
    <Route path='/npm run dev
    ' element ={<Home></Home>}></Route>
    <Route path='/Home' element ={<Home></Home>}></Route>
    <Route path='About' element={<About></About>}></Route>
    <Route path='/Projects' element={<Projects></Projects>}></Route>
    <Route path='/projectData' element={<Workingincrement></Workingincrement>}></Route>
    <Route path='/Stateeg' element={<Stateeg1></Stateeg1>}></Route>
   

    
   

    </Routes>
  
    
    {/*
     <Link to="/Itemmanager"></Link>
      <Link to="/calculater">Calculater</Link>
      <h1>This is above routes section</h1>
      <Routes>
        <Route path='/Itemmanager' element ={<Itemmanager></Itemmanager>}></Route>
        <Route path='/calculater' element ={<Calculater></Calculater>}></Route>


      </Routes>
    <Task></Task>
    <AboutMe></AboutMe>
 <Itemmanager></Itemmanager>
  <Valuewithstate></Valuewithstate>
    <Electricitybill></Electricitybill>
    
    <Calculate></Calculate>

    <UsingReference></UsingReference>

    <UsingReference1></UsingReference1>

    <Calculater a={100} b={20} op="+"></Calculater>
    <Calculater a={100} b={20} op="-"></Calculater>
    <Calculater a={100} b={20} op="/"></Calculater>
    <Calculater a={100} b={20} op="*"></Calculater>

   <Workingwithevent></Workingwithevent>

   <Workingwithvar></Workingwithvar>

   <Incrementdecrement></Incrementdecrement>
   
     {/*<AboutMe userimg={boyimg}
     
     usename="john Capner"
     summary = "You can also directly specify the project name and the template you want to use via additional command line options. "
     skills={["HTML","CSS","CSS3","TAILWIND"]}></AboutMe>*/}
    </>
  )
}
import { Form } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Workingincrement from './components/Workingincrement'
export default App


// fonts icons:

// npm i --save @fortawesome/fontawesome-svg-core

// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

// npm i --save @fortawesome/react-fontawesome@latest