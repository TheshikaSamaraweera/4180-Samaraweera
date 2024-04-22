"use client";

import React from 'react'
import Slider from "react-slick"
import Slide from './Slide';

const Hero = () => {

let settings ={
  dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
}

const slideData = [
  {
    id:0,
    img : "/baner1.jpg",
    title: "Trending Items",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  },

  {
    id:1,
    img : "/baner2.jpg",
    title: "Trending gift",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  },

  {
    id:2,
    img : "/baner3.jpg",
    title: "Trending bags",
    mainTitle: "WOMENS LATEST FASHION SALE",
    price: "$20",
  }
]

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item)=>{
            return (
              <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
              />
            )
          })
          }

        </Slider>
      </div>
      
    </div>
  )
}

export default Hero