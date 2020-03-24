import React from 'react'
import logo from '../images/logo_light.png'


const Footer = ()=> {
    return(
        <footer>
          <div className = 'container'>
            <div>
            <img src= {logo} alt="NewsGrid" className = 'logo'></img>
            </div>
            <p>suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet</p>
        <div>
            <h3>Email Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form>
          <input type="email" placeholder="Enter Email..."/>
          <input type="submit" value="Subscribe" class="btn btn-primary"/>
          </form>
        </div>
        <div>
        <p>
          Copyright &copy; 2019, All Rights Reserved
        </p>
      </div>
      </div>
        </footer>
        
    )
}
export default Footer