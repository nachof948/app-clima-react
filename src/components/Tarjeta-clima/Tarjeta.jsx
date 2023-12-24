import React from 'react';
import './Hoja de estilo/Tarjeta.css'
import { Cargando } from '../Cargando/Cargando';
const Tarjeta = ({mostrarInformacion, cargandoInformacion, clima, pronostico}) => {
  
  if(cargandoInformacion){
    return <Cargando />
  }
  return(
    <section>
      {mostrarInformacion ? (
        <div className='contenedor-tarjeta'>
          <div className='tarjeta'>
            <div className='tarjeta-img'>
              
            </div>
            <div className='tarjeta-info'>

            </div>
          </div>
        </div>
      ):(
        <h2>Sin Datos</h2>
      )}
    </section>
  )
}

export { Tarjeta }