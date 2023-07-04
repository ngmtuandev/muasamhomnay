import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({cartItemm}) => {

  window.addEventListener("scroll", () => {
    const search = document.querySelector('.search')
    search.classList.toggle('active', window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            <Link to='/'>
            <span>Tuấn Store</span>
            </Link>
          </div>
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Nhập tìm kiếm...'></input>
            <span>Tất cả sản phẩm</span>
          </div>
          <div className='icon f_flex width cart_icon'>
            <div className='login'>
              <Link to='/login'>
                <i className='fa fa-user icon_circle'></i>
              </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon_circle'></i>
                {/* Hiển thị số lượng */}
                <span>{cartItemm.length === 0 ? "" : cartItemm.length}</span> 
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search