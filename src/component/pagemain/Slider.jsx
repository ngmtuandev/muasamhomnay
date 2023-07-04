import React from 'react'
import SlideCard from './SlideCard'
import "./Home.css"
const Slider = () => {
  return (
    <>
        <section className='homeSlide contentWidth'>
            <div className='container'>
                <SlideCard></SlideCard>
            </div>
        </section>
    </>
  )
}

export default Slider