import React from "react"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Card(){
    const navigate = useNavigate();

    function goToCatalogue(){
      navigate("/CarsCatalogue")
  }
  
  function goToFinancing(){
    navigate("/Financing")
  }


  useEffect(() => {
    AOS.init();
  }, []) 

  AOS.init({
    duration: 900,
  })

  const contactClick = () => {
    // Scroll to the target element
    const targetSection = document.getElementById('ET');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <div className = "card-container" style ={{marginBottom:"7%"}} id = "CD">
            <div>
                <h1 className="card-title" data-aos = "zoom-in">
                Why Learn About Computer Science?
                </h1>
                </div>
                <div className="card-space">
                    <div className = "card-1" data-aos = "fade-right">
                        <img src = "https://www.immerse.education/wp-content/uploads/2022/02/Computer-Science.jpg" className="card-image"/>
                        <h1 className = "card-main-text">
                            PLENTIFUL CAREERS
                        </h1>
                        <p className = "card-body-text">
                        Computer science careers cover diverse roles: data scientists analyze data, cybersecurity analysts protect assets, software developers create applications, network engineers ensure connectivity, UX designers enhance interactions, and project managers oversee initiatives. Ethical hackers fortify defenses. The dynamic field requires continuous learning, fostering innovation and diverse opportunities.                        </p>
                        <button className= "card-shopButton" onClick={goToCatalogue}>
                            VIEW CATALOGUE
                        </button>
                    </div>
                    <div className = "card-1" data-aos = "fade-right">
                    <img src = "https://imgs.search.brave.com/hs7xnK1y2PwpvUENdtLWQdrQnm2Ai8JnWP3rqpxryC0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgwLzMyLzkx/LzM2MF9GXzQ4MDMy/OTE0M191ZGJ5d1JB/a0lrOExPYk5nd0Zu/TGhXcWJPeWplblhj/YS5qcGc" className="card-image"/>
                        <h1 className = "card-main-text">
                            EMERGING TECHNOLOGIES
                        </h1>
                        <p className = "card-body-text">
                        Emerging technologies in computer science stem from ongoing innovation, global collaboration, and research advancements. AI, cloud computing, and IoT reshape automation. Quantum computing offers transformative capabilities. Open-source contributions and community efforts drive progress. The dynamic nature of the field ensures continuous evolution.
                        </p>
                        <button className= "card-shopButton" onClick={contactClick}>
                            LEARN MORE
                        </button>
                    </div>
                    <div className = "card-1" data-aos = "fade-right">
                    <img src = "https://wealthyretirement.com/wp-content/uploads/2018/11/Man_Checking_Stock_Positions.jpg" className="card-image"/>
                        <h1 className = "card-main-text">
                            IMPORTANT SKILLS
                        </h1>
                        <p className = "card-body-text">
                            
Computer science education imparts essential skills like problem-solving, critical thinking, and coding proficiency. It nurtures creativity, fosters collaboration, and instills adaptability to evolving technologies. Analytical abilities for data analysis, attention to detail, and cybersecurity awareness are also integral to the skill set gained from computer science education.
                        </p>
                        <button className= "card-shopButton" onClick={goToFinancing}>
                            VIEW SKILLSET
                        </button>
                    </div>
                </div>

        </div>
    )
}