import React from 'react'
import '../styles/TopBanner.scss'
import { useNavigate } from 'react-router-dom';

const TopBannerNoBtn = (props) => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `${props.dataEl.route}`;
    navigate(path);
  }

  return (
    <section className='section-top-banner top-banner-no-btn'>
      <article className='topBanner topBanner-alt' style={{background: props.dataEl.background, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
      <div className='text-wrap'>
        <h1 className='banner-title banner-title--alt'>{props.dataEl.title}</h1>
        <p className='banner-desc banner-desc--alt'>{props.dataEl.description}</p>
      </div>
      </article>
      <article className='second-article inactive'>
      <div className='text-wrap'>
      <h1 className='banner-title'>{props.dataEl.title}</h1>
      <p className='banner-desc '>{props.dataEl.description}</p>
      {props.dataEl.showBtn && <button onClick={routeChange} className='button-contact'>{props.dataEl.contact}</button>}
      </div>
      </article>
    </section>
  );
}

export default TopBannerNoBtn;    