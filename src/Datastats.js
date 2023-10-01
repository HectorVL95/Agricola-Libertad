const Datastats = [
  {
    id:1,
    cantidad: <h2 className='cantidad'>1000 Toneladas</h2>,
    contact: <h4 className='contacto'>Vendidas hasta la fecha desde 2019</h4>,
    description: <p className='descripcion'>Tenemos suficiente capacidad para satisfacer las necesidades de los compradores mas exigentes</p>
  },
  {
    id:2,
    cantidad: <h2 className='cantidad'>+25 clientes</h2>,
    contact: <h4 className='contacto'>Los que forman parte de nuestros clientes recurrentes</h4>,
    description: <p className='descripcion'>Entre estos tenemos a Casa Ley, la embajada de Israel, Produce Pay.</p>
  },
  {
    id:3,
    cantidad: <img className="stat-img" src={`${ process.env.PUBLIC_URL + "/buyers-icon-produce-pay.svg"}`} alt="Buyer Icon"/>,
    contact: <h4 className="contacto">Vendedores</h4>,
    description: <ul className="stat-unorder-list">
      <li>Procurar producir producto mas sustentable</li>
      <li>Reducir la huella de carbono en la cadena de suministros</li>
      <li>Cumplir con las metas del ESG</li>
      <li>Incrementar transparencia y rastreabilidad in la cadena de suministros</li>
    </ul>
  },
  {
    id:4,
    cantidad:  <img className="stat-img" src={`${ process.env.PUBLIC_URL + "/sellers-icon-produce-pay.svg"}`} alt='Seller Icon'/>,
    contact: <h4 className="contacto">Compradores</h4>,
    description: <ul className="stat-unorder-list">
      <li>Generar ingresos adicionales como proveedor de creditos o descuentos</li>
      <li>Incrementar ventas con productos crecidos sustentablemente</li>
      <li>Obtener accesso a expertos en nuestra organizacion para crear tu propio programa de disminucion del carbono</li>
      <li>Contribuir a la reduccion de la huella de carbono mediante los suministros de productos frescos</li>
    </ul>
  }
]

export default Datastats;