import React from 'react'
import './Notify.css'
const Notify = () => {

    const styleImg1 = {
        width: "30%",
        height: "350px"
    }

    const styleImg2 = {
        width: "60%",
        height: "350px"
    }

  return (
        <>
            <section className='annouc'>
                <div className='container d_flex'>
                    <div className='img' style={styleImg1}>
                        <img src='./images/banner-1.png' alt='' width='100%' height='100%'></img>
                    </div>
                    <div className='img' style={styleImg2}>
                        <img src='./images/banner-2.png' alt='' width='100%' height='100%'></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Notify