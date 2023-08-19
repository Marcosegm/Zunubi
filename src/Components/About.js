import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image2.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=""/>
        </div>
        <div className='about-section-image-container'>
            <img className='imagen2' src={AboutBackgroundImage} alt=""/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Sobre Nosotros</p>
            <h1 className='primary-heading'>Zunubi</h1>
            <p className='primary-text'>Somos una empresa dedicada a la fábricacion de cóctel de vodka.Contando y calificados con todos los estandares establecidos</p>
            <div className='about-buttons-container'>
                <button className="secondary-button">Mas información</button>
                <button className="watch-video-button"> <BsFillPlayCircleFill/> Ver video </button>
            </div>
        </div>
    </div>
  )
}

export {About}
