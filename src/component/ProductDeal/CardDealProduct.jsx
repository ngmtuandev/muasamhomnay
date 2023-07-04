import React, { useState } from 'react'
import Slider from "react-slick";

// === NextArrow =================================
const NextArrow = (props) => {
    const {onClick} = props
    return( 
        <div className='control-btn' onClick={onClick}>
            <button className='next' style={{cursor : 'pointer'}}>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}
// =================================================================

// === NextArrow =================================
const PrevArrow = (props) => {
    const {onClick} = props
    return( 
        <div className='control-btn' onClick={onClick}>
            <button className='prev' style={{cursor : 'pointer'}}>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

// =================================================================
const CardDealProduct = ({ProductItems, addToCart}) => {

    const [count, setCount] = useState(0)
    const increaseHeart = () => {
        setCount(count+1)
        
    }

    // ==============================================================

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow></NextArrow>, // nextArrow : mặc định của thư viện khi next
        prevArrow: <PrevArrow></PrevArrow>
      };
  return (
    <>
    <Slider {...settings}>
        {
            ProductItems.map((productItem) => {
                return (
                    <div className='box'>
                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'> {productItem.discount} % Off</span>
                                <img src={productItem.cover} alt=''></img>
                                <div className='product-like'>
                                    <label>0</label><br />
                                    <i class="fa fa-heart" onClick={increaseHeart}></i>
                                </div>
                            </div>
                            {/* ==Chi tiết sản phẩm== */}
                            <div className='product-details'>
                                <h3>{productItem.name}</h3>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>{productItem.price}</h4>
                                    <button>
                                        {/* Thêm sản phẩm */}
                                        <i className='fa fa-plus' onClick={() => addToCart(productItem)}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
    </>
  )
}

export default CardDealProduct