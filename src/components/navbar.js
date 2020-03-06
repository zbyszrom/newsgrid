import React from 'react'
import {Link} from 'gatsby'
import {FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa"
import logo from '../images/logo.png'


const Navbar = ()=> {
    return(
        <nav>
            <img src= {logo} alt="NewsGrid"></img>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>

       <ul>
           <li><Link to = '/'>home</Link></li>
           <li><Link to ='/about'>about</Link></li>
       </ul>
       </nav>
    )
}
export default Navbar