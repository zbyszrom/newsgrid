import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"
import {FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa"
import logo from '../images/logo.png'

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 3fr 2fr;
  padding: 1rem;
  align-items: center;
`
const Social = styled.div`
  color: #777;
  margin-right: .5rem;
`
const Ul = styled.ul`
  display: flex;
  justify-self: end;
`
const SLink = styled(Link)`
  padding: 0.75rem;
  font-weight: bold;
  &:hover {
    background: var(--primary);
    color: #fff;
  }
`
const Navbar = ()=> {
    return(
        <nav>
            <Container className = 'container'>
            <img src= {logo} alt="NewsGrid" className = 'logo'></img>
            <Social>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' color ='var(--primary)'/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitterSquare size = '1.8rem' color ='var(--primary)'/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube size = '1.8rem' color ='var(--primary)'/></a>
            </Social>
       <Ul>
           <li><SLink to = '/'>home</SLink></li>
           <li><SLink to ='/about'>about</SLink></li>
       </Ul>
            </Container> 
       </nav>
    )
}
export default Navbar