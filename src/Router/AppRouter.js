import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from '../Config/Pages/Home'
import About from '../Config/Pages/About'
import Service from '../Config/Pages/Service'
import Profile from '../Config/Pages/Profile'

export default function AppRouter() {
  return (
    <div>
      <Router>
<nav>
  <Link to="/">Home</Link>
  <Link to="About">About</Link>
  <Link to="Service">Services</Link>
  <Link to="Profile">Profile</Link>
</nav>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='service' element={<Service/>}/>
  <Route path='profile/:id' element={<Profile/>}/>
  {/* <Route path='profile' element={<Profile/>}/> */}
</Routes>

      </Router>
    </div>
  )
}
