import React from 'react'
import ShopCategories from './ShopCategories'
import CartShop from './CartShop'
import "./ShopStyle.css"
const Shop = ({shopItems, addToCart}) => {
  return (
    <>
        <section className='shop'>
            <div className='container d_flex'>
                <ShopCategories></ShopCategories>
                {/* ====== */}
                <div className='contentWidth'>
                    <div className='heading d_flex'>
                        <div className='heading-left row f_flex'>
                            <h2>Phone</h2>
                        </div>
                        <div className='heading-right row'>
                            <span>View All</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    {/* ===== */}
                    <div className='product-content grid1'>
                        <CartShop shopItems = {shopItems} addToCart={addToCart}></CartShop>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop