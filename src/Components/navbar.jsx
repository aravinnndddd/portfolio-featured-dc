import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'
export const Navbar = () => {
  return (
    
       <div className="nav-section grid-items">
      <h2 className="text">Portfolio</h2>
      <h3 className="text">Aravind</h3>
      <div className="underline1"></div>
      <nav>
      <h4 className="text">
      NAVIGATION</h4>
      <ul>
        <Link to='/'><li className="text">home</li></Link>
      <Link to='/art-work'> <li className="text">art-works</li>      </Link>
      <Link to='/project'> <li className="text">project</li>       </Link>
      <Link to='/about'> <li className="text">about</li>         </Link>
      <Link to='/skills'> <li className="text">skills</li>        </Link>
      <Link to='/coffee'> <li className="text">buy-me-a-coffee</li></Link>
      </ul>
      <div className="nav-btm">
        <p className="text2">Aravinndd</p>
        </div>
      </nav>
    </div>
    
  )
}
