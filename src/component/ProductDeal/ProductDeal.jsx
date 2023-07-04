import React from 'react'
import CardDealProduct from './CardDealProduct'
import "./ProductDeal.css"
const ProductDeal = ({ProductItems, addToCart}) => {
  return (
    <>
        <section className='flash'>
            <div className='container'>
                <div className='heading f_flex'>
                    <i className='fa fa-bolt'></i>
                    <h1>Flash Deal</h1>
                </div>
                <CardDealProduct ProductItems = {ProductItems} addToCart={addToCart}></CardDealProduct>
            </div>
        </section>
    </>
  )
}

export default ProductDeal