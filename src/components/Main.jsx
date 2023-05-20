import React from 'react'
import DataTopBanner from '../DataTopBanner';
import TopBanner from './TopBanner';
import StatsSection from './StatsSection';
import Servicios from './Servicios';
import Trust from './Trust';
import '../styles/Main.scss'

const Main = () => {

  const DataBanner = DataTopBanner.map(dataEl =>{
    return <TopBanner
    key={dataEl.id}
    dataEl={dataEl}/>
  })

  return (
    <main>
    {DataBanner[0]}
    <StatsSection/>
    <Servicios/>
    <Trust/>
    {DataBanner[1]}
  </main>
  );
}

export default Main;