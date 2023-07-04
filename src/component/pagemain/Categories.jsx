import React from 'react'
const Categories = () => {
    const apiCategories = [ 
        {
            cateImage : "./images/category/cat1.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat2.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat3.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat4.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat5.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat6.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat7.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat8.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat9.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat10.png",
            cateName: "dsadsada"
        },
        {
            cateImage : "./images/category/cat11.png",
            cateName: "dsadsada"
        }
    ]
    
  return (
    <>
        <div className='category'>
            {
                
                apiCategories.map((cate, index) => {
                    return (
                        
                        <div className='box f_flex' key={index}>
                            <img src={cate.cateImage} alt=''></img>
                            <span>{cate.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories