import React from 'react';
import './Hoja de estilo/Tarjeta.css'
import { Cargando } from '../Cargando/Cargando';
import imagenCiudad from './Ciudad.jpg'
const Tarjeta = ({mostrarInformacion, cargandoInformacion, clima, pronostico}) => {
  
  let hoy = new Date()
  let dia = hoy.getDate()
  let mes =  hoy.getMonth() + 1
  let año = hoy.getFullYear()
  let fecha = `${dia}/${mes}/${año}`

  let url = ""
  let urlIcon = ""
  

  if(cargandoInformacion){
    return <Cargando />
  }
  if(mostrarInformacion){
    url = `https://openweathermap.org/img/wn/`
    urlIcon = `${url}${clima.weather[0].icon}.png`
  }
  return(
    <section>
      {mostrarInformacion ? (
        <div className='contenedor-tarjeta'>
          <div className='tarjeta'>
            <div className='tarjeta-img'>
              <h3 className='tarjeta-titulo'>{clima.name}</h3>
              <p className='tarjeta-fecha'>{fecha}</p>
              <h1 className='tarjeta-temp'>{(clima.main.temp - 273.15).toFixed(1)}°C</h1>
              <p className='tarjeta-descripcion'><img className='tarjeta-icon' src={urlIcon} alt="Icon" />{clima.weather[0].description}</p>
              <img className='img' src={imagenCiudad}alt="Ciudad" />
            </div>
            <div className='tarjeta-info'>
              <div>
                <p className='sensacion'>Sensación térmica:<span>{(clima.main.feels_like - 273.15).toFixed(1)}°C</span></p>
                <p className='sensacion'>Humedad: <span>{(clima.main.humidity)}%</span></p>
                <p className='sensacion'>Presion: <span>{(clima.main.pressure)}hPa</span></p>
                <p className='sensacion'>Velocidad del Viento:<span>{(clima.wind.speed)}m/s</span></p>
              </div>
              <hr/>
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