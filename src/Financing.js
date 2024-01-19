import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";


export default function Financing(){
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  




  return(
  
  <>
    <Header/>
    <h1 style ={{overflow:"hidden", textAlign: "center"}} >
            FINANCING
          </h1>
    <div className = "About-container Financing-container">
              <img src ="https://media.freshbooks.com/wp-content/uploads/2022/02/how-accounts-receivable-financing-works.jpg" className="FinancingImg"/>
            <div className = "About-text-container Financing-text-container">
              <h2>
              At DriveVista, our mission is to be of service... no matter your budget!
              </h2>
              <p className="About-body-text Financing-body-text">
              
Our commitment to customer satisfaction extends beyond providing top-notch vehicles; it encompasses ensuring accessibility for everyone. Our financing plans are carefully crafted to cater to a spectrum of budgetary constraints. Whether you're a student, a young professional just starting your career, or anyone facing temporary financial challenges, we have a financing solution for you.



One key feature of our financing plans is the flexibility they offer in terms of monthly payments. We prioritize transparency, ensuring that customers are aware of their financial commitment without sacrificing their financial stability. By offering low monthly payments, we aim to ease the burden on your budget, making quality transportation more attainable.

              </p>
              <button className="shopButtonDarkFinancing">
                BOOK APPOINTMENT
              </button>
              </div>
            
            
    </div>
    <Contact/>
    <Footer/>
  </>
  )
    }