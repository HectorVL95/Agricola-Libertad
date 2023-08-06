import React, { useEffect, useState } from 'react'
import '../styles/TopBanner.scss'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/careers.module.scss'

const TopBannerNoBtn = (props) => {

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `${props.dataEl.route}`;
    navigate(path);
  }

  const [isVideoBackground, setIsVideoBackground] = useState(false)

  useEffect(()=> {
    function handleResize(){
      const screenWidth = window.innerWidth;
      setIsVideoBackground(screenWidth >= 880)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

 

  return (
    <section className={`section-top-banner top-banner-no-btn ${props.specialBackground ? styles['alternate-section-top-banner'] : ''}`}>
      <article className={`topBanner topBanner-alt ${props.specialBackground ? styles['topBannerCareers']: ''} ${isVideoBackground ? styles['video-background'] : ''}`} style={{background: props.dataEl.background, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
      <div className='text-wrap'>
        <h1 className='banner-title banner-title--alt'>{props.dataEl.title}</h1>
        <p className='banner-desc banner-desc--alt'>{props.dataEl.description}</p>
      </div>
      </article>
      <article className={`second-article inactive ${props.specialBackground ? styles['second-article-careers'] : ''}`} style={{background: props.dataEl.backgroundSecond, backgroundRepeat: "repeat", backgroundColor: props.dataEl.backgroundColor}}>
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