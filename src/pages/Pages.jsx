import React from 'react'
import Home from '../component/pagemain/Home'
import ProductDeal from '../component/ProductDeal/ProductDeal'
import Top from '../component/TopCart/Top'
import NewArrival from '../component/NewArrival/NewArrival'
import Shop from '../component/Shop/Shop'
import Notify from '../component/Notify/Notify'
const Pages = ({ProductItems, addToCart, cartItemm, shopItems }) => {
  return (
    <>
        <Home cartItemm = {cartItemm}></Home>
        <ProductDeal ProductItems = {ProductItems} addToCart={addToCart}></ProductDeal>
        <Top></Top>
        <NewArrival></NewArrival>
        <Shop shopItems = {shopItems} addToCart={addToCart}></Shop>
        <Notify></Notify>
    </>
  )
}

export default Pages