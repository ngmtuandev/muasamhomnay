import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import "./Header.css"


const Header = ({cartItemm}) => {
  return (
    <>
        <Head></Head>
        <Search cartItemm ={cartItemm}></Search>
        <Navbar></Navbar>        
    </>
  )
}

export default Header