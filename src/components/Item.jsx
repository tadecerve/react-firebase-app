import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {servicio}) => {
  return (
    <div className="servicio">
        <img src={servicio.imagen} />
        <div>
            <h4>{servicio.titulo}</h4>
            <p>Precio: ${servicio.precio}</p>
            <p>Telefono: {servicio.telefono}</p>
            <Link className="ver-mas" to={'/item/${servicios.id}'}>Ver Mas</Link>
        </div>
    </div>
  )
}
export default Item