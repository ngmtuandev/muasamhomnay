import React, {useState} from 'react'
import {Link}   from "react-router-dom"
const Navbar = () => {

    const [MenuMobile, setMenuMobile] = useState(false)

  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='categories d_flex'>
                    <span className='fa fa-border-all'></span>
                    <h4>
                        Categories <i className='fa fa-chevron-down'></i>
                    </h4>
                </div>
                <div className='navlink'>
                    <ul className={MenuMobile ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMenuMobile(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>pages</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>vendor</Link>
                        </li>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </ul>

                    <button className='toggle' onClick={() => {setMenuMobile(!MenuMobile)}}>
                        {MenuMobile ? <i className='fas fa-times close home-bth'></i> : <i className='fas fa-bars open'></i>}
                    </button>

                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar