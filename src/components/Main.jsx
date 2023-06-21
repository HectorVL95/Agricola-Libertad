import React from 'react'
import DataTopBanner from '../DataTopBanner';
import TopBanner from './TopBanner';
import StatsSection from './StatsSection';
import Servicios from './Servicios';
import Trust from './Trust';
import '../styles/Main.scss'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Main = () => {

  const DataBanner = DataTopBanner.map(dataEl =>{
    return <TopBanner
    key={dataEl.id}
    dataEl={dataEl}/>
  })


  return (
    <main>
      <Header/>
      <div className='bannerAndVideo'>
        <div className='dataBanner'>
          {DataBanner[0]}
        </div>
        <iframe className='video-banner ' src="https://player.vimeo.com/video/724543681?h=d2e7c122f1&muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963" frameborder="0"></iframe>
      </div>
      <StatsSection/>
      <Servicios/>
      <Trust/>
      {DataBanner[1]}
      <Footer/>
    </main>
  );
}

export default Main;