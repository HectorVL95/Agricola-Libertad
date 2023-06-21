import React from 'react'
import '../styles/TopBanner.scss'

const TopBannerNoBtn = (props) => {
  return (
    <article className='topBanner' style={{background: props.dataEl.background}}>
    <h1 className='banner-title'>{props.dataEl.title}</h1>
    <p className='banner-desc'>{props.dataEl.description}</p>
  </article>
  );
}

export default TopBannerNoBtn;