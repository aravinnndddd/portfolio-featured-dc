import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className="home contents">
<div className="nav-info">
  <h5><center>home</center></h5>
</div>
<section className="about"><p className="text1">Hi,I'm Aravind</p>
<p className="text1">I'm a passionate Computer Science Engineering student with a love for coding, gaming, and <Link to="/art-work">art</Link>. I enjoy building <Link to="/project">projects</Link> , exploring new technologies, and continuously learning new <Link to = "/skills">skills</Link>. Let's connect and create something amazing!</p></section>
</div>
  )
}
