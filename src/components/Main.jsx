import React, {useEffect} from 'react'
import DataTopBanner from '../DataTopBanner';
import TopBanner from './TopBanner';
import BottomBanner from './BottomBanner';
import StatsSection from './StatsSection';
import Servicios from './Servicios';
import Trust from './Trust';
import '../styles/Main.scss'
import Header from './Header';
import Footer from './Footer';
import Datastats from '../Datastats';



const Main = () => {

  useEffect(() => {
    // Reset scroll position to top when the component is mounted
    window.scrollTo(0, 0);

    // Attach a visibility change event listener to reset scroll on tab switch
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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

  const filteredStatsData = Datastats.filter((dataEl) => dataEl.id === 1 || dataEl.id === 2  )


  return (
    <main>
      <Header/>
      {DataBanner[0]}
      <StatsSection statsData={filteredStatsData}/>
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