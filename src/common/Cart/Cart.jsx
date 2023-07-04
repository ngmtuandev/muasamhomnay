import React from 'react'
import "./Cart.css"
const Cart = ({cartItemm, addToCart, downQtyItem}) => {
  // price : giá trị tích lũy
  const totalPrice = cartItemm.reduce((price, item) => price + item.quanlity*item.price, 0);
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            <div className='productCartList'>
            {cartItemm.length === 0 && <h1 className='no-items product'>No item in cart</h1>}
            {cartItemm.map((item) => {
              const productTotal = item.price * item.quanlity
              return (
                <div className='cart-list product d_flex'>
                  <div className='img'>
                    <img src={item.cover} alt=''></img>
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 x {item.quanlity}
                      <span>${productTotal}.00</span>
                      </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='remoCart'> <i class="fa fa-trash"></i> </button>
                    </div>
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa fa-plus'></i>
                      </button>
                      <button className='downCart' onClick={() => downQtyItem(item)}>
                        <i className='fa fa-minus'></i>
                      </button>
                    </div>
                  </div>
                </div>
                
              )
            })}
            <div className='cart-total product'>
              <h2>Cart Summary</h2>
              <div className='d_flex'>
                <h4>Total : </h4>
                <h3>${totalPrice}</h3>  
              </div>      
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart