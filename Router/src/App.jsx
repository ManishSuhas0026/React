import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'


export default function App() {
  return(
    <div>
      
      <Navbar />
      <>
        <Route exact path="/" component={Home} />  
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />    
      </>
    </div>
  )
}