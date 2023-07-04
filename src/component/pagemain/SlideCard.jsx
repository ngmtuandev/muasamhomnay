import React from 'react'
import DataApi from './ApiData'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          
        };
  return (
    
    <>
        <Slider {...settings}>
        {
            DataApi.map((value, index) => {
                return (
                    <div className='box d_flex top' key={index}>
                        <div className='left'>
                            <h1>{value.title}</h1>
                            <p>{value.desc}</p>
                            <button className='btn-primary'>Visit Collections</button>
                        </div>
                        <div className='right'>
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

export default SlideCard