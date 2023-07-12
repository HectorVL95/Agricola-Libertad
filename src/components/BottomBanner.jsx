import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/BottomBanner.scss'


const BottomBanner = (props) => {

  let navigate = useNavigate()
  function routeChange(){
  let path = `${props.dataEl.route}`
  navigate(path)
  }

  return (
    <article className='bottomBanner' style={{background: props.dataEl.background}}>
      <h1 className='bottom-banner-title'>{props.dataEl.title}</h1>
      <p className='banner-desc'>{props.dataEl.description}</p>
      <button onClick={routeChange} className='button-contact'>{props.dataEl.contact}</button>
    </article>
  );
}

export default BottomBanner;