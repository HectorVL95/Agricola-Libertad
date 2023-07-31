import React from 'react'
import { BrowserRouter as Router, Switch, 
Route, Redirect,} from "react-router-dom";

export default [
  {
    id:0,
    title: "Proveendo de la mejor calidad de maiz en el centro de sinaloa",
    description: "Ofrece maiz de alta calidad, vendemos tanto a pequeños distribuidores como grandes cadenas internacionales y clientes en el extranjeros. Compre con confianza, nuestra reputacion nos respalda asi como el testimonio de otros compradores.",
    contact: "Conecta con un experto",
    background: "#154344",
    route: "/GetInTouch",
    sideContent:"https://player.vimeo.com/video/724543681?h=d2e7c122f1&muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963"
  },
  {
    id:1,
    title: "Nuestra Historia",
    description: "Aprenda sobre los origines de nuestro huerto y como fue que empezo todo en el ejido Tierra Y Libertad No. 2",
    contact: "Click aqui para ver mas",
    background: "center url(https://producepay.com/wp-content/uploads/2022/08/our-story-produce-pay-scaled.jpg)",
    route: "/Story"
  },
  { 
    id:2,
    title: "Construyendo confianza y transparencia para ofrecer productos de primera",
    description:"Nuestro compromiso es con el cliente, su tiempo importa mucho para nosotros, que el cliente este seguro que sus productos llegaran en la mejor condicion y calidad",
    background: "url(https://producepay.com/wp-content/uploads/2022/08/aproducepay-is-building-a-more-connected-and-sustainable-fresh-produce-supply-chain.jpg)",
    backgroundSecond: "#154344",
    showBtn: false
  },
  {
    id:3,
    title: "Empresa socialmente responsable en la comprescion de carbono",
    description: "Obtén más información acerca de cómo la industria agrícola tiene un gran potencial para convertirse en un sector más rentable y sustentable.",
    background: "url(https://producepay.com/wp-content/uploads/2022/08/the-very-first-carbon-offset-program-for-the-produce-industry-produce-pay.jpg)",
    contact: "Empieza aqui",
    backgroundSecond: "#154344",
    showBtn: true
  },
  {
    id:4,
    title: "Unete al equipo de Agricola Libertad",
    description: "Estamos creciendo rapido y queremos que te unas a nuestro dinamico equipo de experimentados desarrolladores, diseñadores y expertos en negocio",
    background: "url(https://producepay.com/wp-content/uploads/2020/07/producepay-hero-home.jpg)",
    showBtn: false
  }
]