import React from 'react'
import Img1 from './Images/bread.avif'
import Img2 from './Images/burger.avif'
import Img3 from './Images/coffee.avif'
import Img4 from './Images/egg.avif'
import Img5 from './Images/fish.avif'
import Img6 from './Images/pasta.avif'
// import Img7 from './Images/pizza.avif'
import './Css/Gallery.css'

export const Gallery = () => {
    let data =[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        }
    ]
  return (
    <>
    <h1 style={{textAlign:"center"}}>Food Suggestion</h1>
<div className='gallery'>
    {data.map((item,index)=>{
        return(
            <div className='pics' key={index}>
                <img src={item.imgSrc} alt="prop"/>
                
            </div>

        )
    })}
     
</div>
   
    
    </>
  )
}
