import React, { useState } from 'react'

// =================================================================
const CartShop = ({shopItems, addToCart}) => {

    const [count, setCount] = useState(0)
    const increaseHeart = () => {
        setCount(count+1)
        
    }
    // ==============================================================
  return (
    <>

        {
            shopItems.map((productItem) => {
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
    </>
  )
}

export default CartShop