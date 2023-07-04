import React from 'react'
import CartNewArrival from './CartNewArrival'
import "./NewArrival.css"
const NewArrival = () => {
  return (
    <>
        <section className='newarrival'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left row f_flex'>
                        <i className='fa fa-border-all'></i>
                        <h2>New Arrivals</h2>
                    </div>
                    <div className='heading-right row'>
                        <span>View All</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <CartNewArrival></CartNewArrival>
            </div>
        </section>
    </>
  )
}

export default NewArrival