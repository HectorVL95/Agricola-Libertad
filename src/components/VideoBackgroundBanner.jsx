import React, { useEffect, useState } from 'react';
import styles from '../styles/careers.module.scss';

const VideoBackgroundBanner = (props) => {
  const [isVideoBackground, setIsVideoBackground] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setIsVideoBackground(screenWidth >= 880);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article
      className={`topBanner topBanner-alt ${
        props.specialBackground ? styles['topBannerCareers'] : ''
      } ${isVideoBackground ? styles['video-background'] : ''}`}
      style={{
        backgroundImage: `url(${props.dataEl.background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='text-wrap'>
        <h1 className='banner-title banner-title--alt'>{props.dataEl.title}</h1>
        <p className='banner-desc banner-desc--alt'>{props.dataEl.description}</p>
      </div>
    </article>
  );
};

export default VideoBackgroundBanner;