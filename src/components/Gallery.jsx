  import React, { useRef, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import workers from '../assets/workers.jpg';
import corn from '../assets/corn.jpg';
import '../styles/Gallery.scss';
import GalleryPic from './GalleryPic';
import DataGallery from '../DataGallery';
import closeBtn from '../assets/cancel-icon-svgrepo-com.svg'
import TeamMember from './TeamMember';

const Gallery = () => {

  const [shown, setShown]= useState(true)

  const image = DataGallery.map(dataEl =>{
    return <GalleryPic
    key={dataEl}
    dataEl={dataEl}
    handleClick={show}/>
  })

  


  function show(dataEl){
      setShown(dataEl)
    }
  function hide(dataEl){
    setShown(!dataEl)
  }
  
  
  return (
    <main className='Gallery'>
      <div className='darken darken-inactive'></div>
      <Header/>
      <section className='gallery-section'>
        {image.map((item, index) => <div onClick={()=>{show(item)}} key={index}>
          {item}
        </div>)}
      </section>
      {
        shown && <article className='selected-image'>
          <button onClick={hide}>x</button>
          {shown}
        </article>
      }
      <Footer/>
    </main>
  );
}

export default Gallery;