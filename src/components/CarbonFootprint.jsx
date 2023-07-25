import Header from './Header';
import DataTopBanner from '../DataTopBanner';
import TopBannerNoBtn from './TopBannerNoBtn';
import StatsSection from './StatsSection';
import Footer from './Footer';
import Datastats from '../Datastats';
import '../styles/CarbonFootprint.scss'
import greenplanet from '../assets/Sustainability-Adobe-by-Man-As-Thep-scaled.jpeg'
import footprintGraph from '../assets/carbon-footprint-1-1024x576.jpg'

const CarbonFootprint = () => {

  const topBanner = DataTopBanner.map(dataEl => {
    return (<TopBannerNoBtn
    dataEl={dataEl}
    key={dataEl}/>) 
  })

  const filteredStatsData = Datastats.filter((dataEl) => dataEl.id === 3 || dataEl.id === 4);

  
var liCarbon = document.querySelector('.li-carbon')
for(let i = 0; i < liCarbon.length; i++){
  
}

  return (
    <main className="CarbonFootprint">
      <Header/>
      {topBanner[3]}
      <StatsSection statsData={filteredStatsData}/>
      <section className='carbon-action'>
        <h2>Una solucion para los desafios globales de sustentabilidad</h2>
        <div className='carbon-sol-images-text'>
          <img className='carbon-img' src={greenplanet} alt="Planeta Verde" />
          <div className='carbon-sol-text'>
            <p>Debido a los mas recientes problemas de cambio climatico. Agricola libertad ha decidido comvertirse en una empresa socialmente responsable para disminuir sus indices de huella de carbono y no contribuir en el cambio global</p>
            <p>Alentamos a las organizaciones que trabajan junto con nosotro asi como a nuestros proveedores y clientes que adopten un modelo sustentable, protejamos nuestro planeta, solo tenemos uno.</p>
          </div>
        </div>
        <h2>La huella de carbono</h2>
        <div className='carbon-sol-images-text'>
          <div className='carbon-sol-text'>
            <p>Debido a la intensidad de emisión de carbono en su producción y al impacto de la cantidad de alimentos desperdiciados, la agricultura contribuye con el 11% de las emisiones de carbono a nivel global. El mercado mundial de productos frescos tiene un valor económico superior a los $1.3 billones de dólares, por lo que este gran sector de la industria tiene un gran potencial para influir en las emisiones de carbono globales. </p>
          </div>
          <div className='graph-description'>
            <img className='grafica' src={footprintGraph} alt="Grafica huella de carbono" />
            <p>De acuerdo con la Organización de las Naciones Unidas para la Alimentación y la Agricultura (<a href="https://www.fao.org/fileadmin/templates/nr/sustainability_pathways/docs/FWF_and_climate_change.pdf">FAO</a>, por sus siglas en inglés), las frutas y verduras son de los alimentos que más contribuyen a las emisiones de carbono en su producción y de los que más se desperdician.</p>
          </div>
        </div>
      </section>
      <section className='introduccion-carbono'>
        <h1>Introduccion a los mercados de carbono</h1>
        <ul>
          <li className='li-carbon'>¿Qué es una compensación de carbono? 
              <p className='li-text li-text-inactive'>Una compensación de carbono es la reducción de una tonelada métrica de emisiones de gases de efecto invernadero, lo cual puede usarse como herramienta para mitigar la huella de carbono de una empresa o incluso puede venderse a otra organización en un mercado internacional.</p> 
          </li>
          <li className='li-carbon'>¿Como se generan las compensaciones de carbono?
            <p className='li-text li-text-inactive'>
            Las compensaciones se pueden generar capturando, reutilizando o destruyendo un gas de efecto invernadero que, de otro modo, se habría emitido al aire. También se pueden generar produciendo energía limpia y renovable, así como eliminando el uso de combustibles fósiles.
            </p>
          </li>
          <li className='li-carbon'>¿Que tipo de empresas están comprando las compensanciones de carbono?
            <p className='li-text li-text-inactive'>
            La compensación de carbono es comprada con mayor frecuencia por una corporación del sector privado. Las empresas utilizan estas compensaciones para lograr sus propios objetivos ESG (medioambientales, sociales y de gobierno corporativo), ofrecer a los clientes productos o servicios neutrales en carbono u obtener otros beneficios ambientales y de reputación.
            </p>
          </li>
          <li className='li-carbon'>¿Cómo se verfican las compensancioones?
            <p className='li-text li-text-inactive'>Todas las compensaciones de carbono que ingresan al mercado voluntario serán verificadas por una organización certificada.</p>
          </li>
          <li className='li-carbon'>
            ¿Cómo se beneficia un programa de compensación de carbono al agricultor?
            <p className='li-text li-text-inactive'>
            Las compensaciones de carbono se pueden utilizar para financiar la transición a prácticas agrícolas más sostenibles. Estas nuevas prácticas pueden incrementar la calidad del producto y el rendimiento de las cosechas. Los beneficios adicionales pueden incluir una comunidad más limpia para los agricultores, entornos de trabajo más seguros y mayores oportunidades económicas.
            </p>  
          </li>
        </ul>
      </section>
      <Footer/>
    </main>
  );
}

export default CarbonFootprint;