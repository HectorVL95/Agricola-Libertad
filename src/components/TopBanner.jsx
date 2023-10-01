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
    <section className='section-top-banner' background-video>
      <article className='topBanner' style={{background: props.dataEl.background, backgroundSize: 'cover'}}>
        <div className='text-wrap'>
          <h1 className='banner-title'>{props.dataEl.title}</h1>
          <p className='banner-desc'>{props.dataEl.description}</p>
          {props.dataEl.showBtn && <button onClick={routeChange} className='button-contact'>{props.dataEl.contact}</button>}
        </div>
      </article>
      <div className='wrap'>
        <iframe title='Video Banner' className='video-banner inactive' style={{background: props.dataEl.backgroundSecond}} src={props.dataEl.sideContent} allowFullScreen="allowFullScreen" frameborder="0" width="400" height="240" allow='autoplay; fullscreen; picture-in-picture' data-ready="true"></iframe>
      </div>
    </section>
  );
}

export default TopBanner;