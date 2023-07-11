import React from 'react'
import DataTopBanner from '../DataTopBanner';
import TopBanner from './TopBanner';
import BottomBanner from './BottomBanner';
import StatsSection from './StatsSection';
import Servicios from './Servicios';
import Trust from './Trust';
import '../styles/Main.scss'
import Header from './Header';
import Footer from './Footer';


const Main = () => {

  const DataBanner = DataTopBanner.map(dataEl =>{
    return <TopBanner
    key={dataEl.id}
    dataEl={dataEl}/>
  })

  const bottomBanner = DataTopBanner.map(dataEl=>{
    return <BottomBanner
     key={dataEl.id}
     dataEl={dataEl}/>
  })

  return (
    <main>
      <Header/>
      {DataBanner[0]}
      <StatsSection/>
      <Servicios/>
      <Trust/>
      <article className='historia-banner'>
        {bottomBanner[1]}
      </article>
      <Footer/>
    </main>
  );
}

export default Main;