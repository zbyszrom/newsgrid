import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"
import logo from '../images/logo_light.png'

const FContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  padding: 1rem 0;
`
const SLink = styled(Link)`
  color: white;
  &:hover {
    color: var(--primary)
  }
`
const Fp = styled.p`
  text-align: center;
  font-size: .8rem;
  background: #444;
  `

  const Button = styled(Link)`
  display: inline-block;
  border: none;
  background: var(--secondary);
  color: #fff;
  padding: 0.5rem 1.5rem;
  &:hover {
    background: var(--primary);
  }
 `
 const Input = styled.input.attrs({type: 'submit', value: 'Subscribe'})`
  display: inline-block;
  border: none;
  background: var(--primary);
  color: #fff;
  padding: 0.5rem 1.5rem;
  &:hover {
    background: var(--secondary);
  }`
 
const Footer = ()=> {
    return(
        <footer>
          <div className = 'container'>
            <FContainer>
            <div>
              <img src= {logo} alt="NewsGrid" className = 'logo'></img>
              <p>suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet</p>
            </div>
            <div>
              <h3>Email Newsletter</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <form>
              <input type="email" placeholder="Enter Email..."/>  
              <Input/>
              
              </form>
            </div>
            <div>
              <h3>Site Links</h3>
              <ul class="list">
              <li><SLink to="#">Help & Support</SLink></li>
              <li><SLink to="#">Privacy Policy</SLink></li>
              <li><SLink to="#">About Us</SLink></li>
              <li><SLink to="#">Contact</SLink></li>
              </ul>
            </div>
            <div>
              <h2>Join Our Club</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
              < Button to ="#" >Join Now</Button>
            </div>
            </FContainer>
            <div>
            <Fp>
              Copyright &copy; 2020, All Rights Reserved
            </Fp>
            </div>
            
          </div>
        </footer>
        
    )
}
export default Footer