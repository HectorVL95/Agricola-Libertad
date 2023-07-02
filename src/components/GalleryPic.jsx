import React from 'react'
import '../styles/GalleryPic.scss'


const GalleryPic = (props) => {
  return (
    <article className='GalleryPic' >
      <img className='picture' src={props.dataEl.img} alt="Trabajador" onClick={props.handleClick}/>
      <p className='description'>{props.dataEl.description}</p>
    </article>
  );
}

export default GalleryPic;