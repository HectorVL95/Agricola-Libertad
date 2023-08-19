import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    // Reset scroll position to top when the component is mounted
    window.scrollTo(0, 0);

    // Attach a visibility change event listener to reset scroll on tab switch
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const [activeIndex, setActiveIndex]=useState(null)

  const image = DataGallery.map(dataEl =>{
    return <GalleryPic
    key={dataEl}
    dataEl={dataEl}
    activeIndex={activeIndex}/>
  })

 
  function hide(){
    setActiveIndex(null)

    const darken = document.querySelector('.darken')
      if(darken){
        darken.style.display = "none"
      }
  }

  function nextSlide(){
    setActiveIndex ((prevIndex) => (prevIndex + 1) % DataGallery.length);
  }
  
  function prevSlide(){
    setActiveIndex((prevIndex) => (prevIndex - 1 + DataGallery.length) % DataGallery.length)
  }

  useEffect(()=>{
    const handleKeyDown = (event) =>{
      if (activeIndex !== null){
        if(event.key === "ArrowLeft"){
          prevSlide();
        } else if (event.key === "ArrowRight"){
          nextSlide()
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () =>{
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex])
  
  return (
    <main className='Gallery'>
      <div onClick={hide} className={`darken ${activeIndex !== null ? 'darken' : 'darken-inactive'}`}></div>
      <Header/>
      <section className='gallery-section'>
        {image.map((item, index) => <div onClick={()=>{setActiveIndex(index)}} key={index}>
          {item}
        </div>)}
        {
        activeIndex  !== null &&( 
        
          <article className='selected-image'>
            <div className='information-selected-image'>
              <button className='closeBtn' onClick={hide}>x</button>
              <img className='big-picture' src={DataGallery[activeIndex].img} alt={DataGallery[activeIndex].description} />
              <p className='big-picture-description'>{DataGallery[activeIndex].description}</p>
              <button onClick={prevSlide} className='leftBtn carouselBtns'>◄</button>
              <button onClick={nextSlide} className='rightBtn carouselBtns'>►</button>
            </div>
          </article>
        )
      }
      </section>

      <Footer/>
    </main>
  );
}

export default Gallery;