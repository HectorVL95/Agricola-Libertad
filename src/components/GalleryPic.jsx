import React from 'react'
import '../styles/GalleryPic.scss'


const GalleryPic = (props) => {
  return (
    <article className='GalleryPic' >
      <img className={`picture images[${props.activeIndex}]`} src={props.dataEl.img} alt="Galeria" />
      <p className='description'>{props.dataEl.description}</p>
    </article>
  );
}

export default GalleryPic;