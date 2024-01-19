import React from "react"
import LOGO from "./images/logo.jpeg"
import { useNavigate } from "react-router-dom"




export default function Header(){

    const navigate = useNavigate()

    const handleButtonClick = () => {
        // Scroll to the target element
        const targetSection = document.getElementById('Contact-us');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    function goToHome(){
        navigate("/")
    }
    function goToCatalogue(){
        navigate("/CarsCatalogue")
    }
    function goToFinancing(){
        navigate("/Financing")
    }

    return(
        <header className = "header__menu">
                    <img src= "https://cdn-icons-png.flaticon.com/512/9969/9969512.png" style ={{cursor:"pointer"}} alt = "logo "width = "70px" onClick={goToHome}/>
                    <nav className = "menu">
                       <a onClick={handleButtonClick}> About </a>
                       <a onClick={goToFinancing}>Skills</a>
                       <a onClick={goToCatalogue}>Careers</a> 
                    </nav>
                    <button className = "shopButton" onClick={goToCatalogue}> VIEW TOPICS </button>
            </header>)
}
