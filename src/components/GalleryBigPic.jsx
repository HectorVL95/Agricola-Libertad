import React from 'react'
import '../styles/GalleryBigPic.scss'
import cancel from '../assets/cancel-icon-svgrepo-com.svg'


const GalleryBigPic = (props) => {
  return (
    <article className='GalleryBigPic'>
      <div className='cancelWrap'>
        <img className='cancel-btn' src={cancel} alt={props.dataEl.description} onClick={props.handleClick}/>
      </div>
      <div className='img-and-description'>
        <img className='img-pic' onClick={props.handleClick} src={props.dataEl.img} alt={props.dataEl.description} />
        <p>{props.dataEl.description}</p>
      </div>
    </article>
  );
}

export default GalleryBigPic;