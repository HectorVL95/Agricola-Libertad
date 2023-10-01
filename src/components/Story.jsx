import React, { useEffect } from 'react'
import Header from './Header';
import '../styles/Story.scss'
import DataTopBanner from '../DataTopBanner';
import TopBannerNoBtn from './TopBannerNoBtn';
import worker from "../assets/corn-worker.jpg"
import Footer from './Footer';


const Story = () => {
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
    return <TopBannerNoBtn
    key={dataEl.id}
    dataEl={dataEl}/>
  })
  
  return (
    <main className='Story'>
      <Header/>
      {DataBanner[2]}
      <section className='historia'>
        <h1 className='historia-title'>Todo Empezo como un sueño</h1>
        <p className='historia-text'>Fundada en el 2014 por Hector Valenzuela, un emprendedor que tenia el sueño de ser agricultor, sin tener ningun conocimiento alguno en la industria se lanzo a lo extraño y fuera de su zona de comfort asumiendo riesgos, primero sembrando limon persa, al no dar los resultados que espero, al poco tiempo sembro Maiz; Hoy en dia su negocio prospera ya que cuenta con varios compradores y el negocio genera alrededor de 1000 toneladas de maiz al año</p>
        <div className='worker-div'>
          <img className='worker' src={worker} alt="Corn worker" />
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Story;