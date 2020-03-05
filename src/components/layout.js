import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children})=> {
    return(
        <main>
        <Navbar/>
        {children}
        <Footer/>
        </main>
    )
}
export default Layout