import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import workers from '../assets/workers.jpg';
import corn from '../assets/corn.jpg';
import '../styles/Gallery.scss';
import GalleryPic from './GalleryPic';
import DataGallery from '../DataGallery';
import GalleryBigPic from './GalleryBigPic';

const Gallery = () => {

  const [shown, setShown]= useState(true )

  const image = DataGallery.map(dataEl =>{
    return <GalleryPic
    key={dataEl}
    dataEl={dataEl}
    handleClick={show}/>
  }
    )

  const bigImage = DataGallery.map(dataEl =>{
    return <GalleryBigPic
    key={dataEl}
    dataEl={dataEl}
    handleClick={hide}/>
  })

  function show(){
      if(image[0]) 
        {document.querySelector(".bigImage").style.display = "block";
        
      }
      else if(image[1])
        {document.querySelector(".bigImage").style.display = "block"}
    }
  
  
  function hide(){
    document.querySelector(".bigImage").style.display = "none"
  }
  
  
  return (
    <main className='Gallery'>
      <div className='darken darken-inactive'></div>
      <Header/>
      <section className='gallery-section'>
        {image[0]}
        {image[1]}
        {image[2]}
        {image[3]}
        {image[4]}
        {image[5]}
        {image[6]}
        {image[8]}
        {image[9]}
      </section>
      <section className='bigImage'>
        {shown ? bigImage[3] : false}
      </section>
      <Footer/>
    </main>
  );
}

export default Gallery;