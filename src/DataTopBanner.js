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
    route: "/GetInTouch"
  },
  {
    id:1,
    title: "Nuestra Historia",
    description: "Aprenda sobre los origines de nuestro huerto y como fue que empezo todo en el ejido Tierra Y Libertad No. 2",
    contact: "Click aqui para ver mas",
    background: "center url(https://producepay.com/wp-content/uploads/2022/08/our-story-produce-pay-scaled.jpg)",
    route: "/Story",
  },
  { 
    id:2,
    title: "Construyendo confianza y transparencia para ofrecer productos de primera",
    description: "Agricola libertad construye confianza para tener mejores relaciones y una ",
    background: "center url(https://producepay.com/wp-content/uploads/2022/08/aproducepay-is-building-a-more-connected-and-sustainable-fresh-produce-supply-chain.jpg)",
  }
]