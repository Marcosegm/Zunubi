import React from "react";
import { Navbar } from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image2.png"
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
    return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground}/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading"> Descubre el sabor único de nuestro refrescante cóctel de vodka </h1>
                <button className="secondary-button"> Ordena ahora <FiArrowRight/> </button>
            </div>
            <div className="home-image-container">
                <img className="imagen1" src={BannerImage} alt=""/>
            </div>
        </div>
    </div>
    )
};

export {Home};