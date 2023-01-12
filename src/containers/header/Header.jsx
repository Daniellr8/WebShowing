import React from 'react'
import './header.css';
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Tu Aliado En Servicio Técnico Especializado </h1>
        <p>En Showing Computo te brindamos asesoría y solución a tus problemas relacionados con Computadores portátiles o de mesa y otros equipos de cómputo, ofrecemos servicio de reparacion, instalación de software, mantenimiento preventivo y correctivo.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Dejanos tu correo"></input>
          <button type='button'>Asesoria</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>Contamos con una gran cantidad de clientes que nos han elegido</p>
        </div>        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header