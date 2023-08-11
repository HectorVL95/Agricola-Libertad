  import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import workers from '../assets/workers.jpg';
import corn from '../assets/corn.jpg';
import '../styles/Gallery.scss';
import GalleryPic from './GalleryPic';
import DataGallery from '../DataGallery';
import closeBtn from '../assets/cancel-icon-svgrepo-com.svg'
import TeamMember from './TeamMember';

const Gallery = (images) => {

  const [shown, setShown]= useState(false , "block")
  const [activeIndex, setActiveIndex]=useState(0)

  const image = DataGallery.map(dataEl =>{
    return <GalleryPic
    key={dataEl}
    dataEl={dataEl}
    handleClick={show}
    activeIndex={activeIndex}/>
  })

  function show(dataEl){
      setShown(dataEl, true)

      const darken = document.querySelector('.darken')
      if(darken){
        darken.style.display = shown === 'block' ? "none" : "block"
      }
    };
  function hide(dataEl){
    setShown(!dataEl)

    const darken = document.querySelector('.darken')
      if(darken){
        darken.style.display = shown === 'block' ? "block" : "none"
      }
  }

  function nextSlide(){
    setActiveIndex ((prevIndex) => (prevIndex + 1) % DataGallery.length);
  }
  
  function prevSlide(){
    setActiveIndex((prevIndex) => (prevIndex - 1 + DataGallery.length) % DataGallery.length)
  }
  
  return (
    <main className='Gallery'>
      <div onClick={hide} className='darken darken-inactive'></div>
      <Header/>
      <section className='gallery-section'>
        {image.map((item, index) => <div onClick={()=>{show(item)}} key={index}>
          {item}
        </div>)}
        {
        shown && 
        
        <div className=''>
          <article className='selected-image'>
            <button className='closeBtn' onClick={hide}>x</button>
            {shown}
            <button onClick={prevSlide} className='leftBtn carouselBtns'>◄</button>
            <button onClick={nextSlide} className='rightBtn carouselBtns'>►</button>
          </article>

        </div>
      }
      </section>

      <Footer/>
    </main>
  );
}

export default Gallery;