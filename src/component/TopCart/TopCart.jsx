import React from 'react'
import DataTopCart from './DataTopCart'
import Slider from "react-slick";
import "./TopCart.css"

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <>
    <Slider {...settings}>
        {
            DataTopCart.map((value, key) => {
                return (
                    <div className='box product' key={key}>
                        <div className='nametop d_flex'>
                            <span className='tleft'>{value.para}</span>
                            <span className='tright'>{value.desc}</span>
                        </div>
                        <div className='img'>
                            <img src={value.cover} alt=''></img>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
    </>
  )
}

export default TopCart