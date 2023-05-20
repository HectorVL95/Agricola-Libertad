import React from 'react'
import '../styles/TopBanner.scss'

const TopBanner = (props) => {


  return (
    <article className='topBanner' style={{background: props.dataEl.background}}>
      <h1 className='banner-title'>{props.dataEl.title}</h1>
      <p className='banner-desc'>{props.dataEl.description}</p>
      <button className='button-contact'>{props.dataEl.contact}</button>
    </article>
  );
}

export default TopBanner;