import React from 'react'
import '../styles/TopBanner.scss'
import { useNavigate } from 'react-router-dom';


const TopBanner = (props) => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `${props.dataEl.route}`;
    navigate(path);
  }

  return (
    <article className='topBanner' style={{background: props.dataEl.background}}>
      <h1 className='banner-title'>{props.dataEl.title}</h1>
      <p className='banner-desc'>{props.dataEl.description}</p>
      <button onClick={routeChange} className='button-contact'>{props.dataEl.contact}</button>
    </article>
  );
}

export default TopBanner;