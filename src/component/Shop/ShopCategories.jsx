import React from 'react'
import Products from './DataProduct'
const ShopCategories = () => {
  return (
    <>
        <div className='category'>
            <div className='chead d_flex'>
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {
                Products.map((value, key) => {
                    return (
                        <div className='box f_flex' key={key}>
                            <img src={value.cateImg} alt=''></img>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
            <div className='box box2'>
                <button>View All Brands</button>
            </div>
        </div>
    </>
  )
}

export default ShopCategories