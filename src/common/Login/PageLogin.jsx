import React from 'react'
import {Link}   from "react-router-dom"
import "./PageLogin.css"
const PageLogin = () => {
  return (
    <>
        <div className='container login_pg'>
            <div className='return_home'>
                <span> 
                    <Link to='/'>
                        <i class="fa fa-arrow-left"></i>
                        Home
                    </Link> 
                </span>
            </div>
                <div className='mainLogin'>
                    <h2>Đăng nhập</h2>
                    <h3>Chào bạn quay lại</h3>
                    <form>
                        <input placeholder='Nhập số điện thoại của bạn'></input>
                        <input placeholder='Nhập mật khẩu của bạn'></input>
                        <button>Đăng Nhập</button>
                        <span>hoặc sử dụng</span>
                        <div className='login_dif'>
                            <div className='iconSos'>Facebook</div>
                            <div className='iconSos'>Google</div>
                            <div className='iconSos'>Icloud</div>
                        </div>
                    </form>
                </div>
        </div>
    </>
  )
}

export default PageLogin