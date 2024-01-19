import React from "react"
import { useNavigate } from "react-router-dom"
import Cars from "./Cars"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Hero(){

  const navigate = useNavigate()
    const NP = Cars[0]
    function goToBuyPage(){
      navigate("/buyCar", {state: {carInfo: NP}})

      }

      function goToCatalogue(){
        navigate("/CarsCatalogue")
    }

    const handleButtonClick = () => {
      // Scroll to the target element
      const targetSection = document.getElementById('About-us');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };


    useEffect(() => {
      AOS.init();
    }, [])    
  return(
  <div className = "hero-container">
    <div className = "hero-text">
    <h2 className = "hero-company-text" data-aos = "fade-right">
        Tech Topics Assignment
      </h2>
      <div className="hero-title-container" data-aos = "fade-right" >
      <h1 className = "hero-1-text" data-aos = "fade-right">
        CS Oppertunities
      </h1>
      <h3 className = "hero-trending" data-aos = "fade-right"> TRENDING</h3>
      </div>
      <h1 className = "hero-main-text" data-aos = "fade-right">
        CHECK OUT THE CURRENT CS LANDSCAPE!
      </h1>
      <h1 className="hero-price" data-aos = "fade-right">
        ONLY A 5 MINUTE READ
      </h1>
      <div className = "hero-buttons" data-aos = "fade-right">
        <button className = "shopButtonSolid" onClick={handleButtonClick} data-aos = "fade-right">
          READ MORE
        </button>
        <button className = "shopButtonDark" onClick={goToCatalogue} data-aos = "fade-right">
           CAREERS
        </button>
      </div>
    </div>
    <img src = "https://f.hubspotusercontent10.net/hubfs/6448316/cybersecurity-computer-science.jpg" className = "hero-car"  data-aos = "fade-left"/>
    <div className = "hero-buttons-mobile">
        <button className = "shopButtonSolid" data-aos = "fade-down"  onClick={handleButtonClick}>
          READ MORE
        </button>
        <button className = "shopButtonDark" data-aos = "fade-down" onClick={goToCatalogue}>
          BROWSE CAREERS
        </button>
      </div>
    
    
      

  </div>)
}