import React from 'react'
import DataNewArrival from './DataNewArrival'
import "../../../src/App.css"
const CartNewArrival = () => {
  return (
    <>
        <div className='content grid product'>
            {
                DataNewArrival.map((value, key) => {
                    return (
                        <div className='box' key={key}>
                            <div className='img'>
                                <img src={value.cover} alt=''></img>
                            </div>
                            <h4>{value.name}</h4>
                            <span>{value.price}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default CartNewArrival