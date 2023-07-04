import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <footer>
            <div className='container grid2'>
                <div className='box'>
                    <h1>TuanStore</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique alias harum veritatis eligendi adipisci placeat nihil. Libero esse, fuga a alias ipsa ullam ipsum consectetur porro tempore fugit, commodi dolore?</p>
                    <div className='icon d_flex'>
                        <div className='img d_flex'>
                            <i className='fa-brands fa-google-play'></i>
                            <span>Google Play</span>
                        </div>
                        <div className='img d_flex'>
                            <i className='fa-brands fa-google-play'></i>
                            <span>App Play</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                <h2>About Us</h2>
                <ul>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                </ul>
            </div>

            <div className='box'>
                <h2>About Us</h2>
                <ul>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                    <li>Career</li>
                </ul>
            </div>

            <div className='box'>
                <h2>Contact us</h2>
                <ul>
                    <li>Email : nguyenmanhtuancomputer@gmail.com</li>
                    <li>Sdt : 0363073476</li>
                </ul>
            </div>
            </div>

            {/* =============== */}

            

        </footer>
    </>
  )
}

export default Footer