import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function Steps(){
  useEffect(() => {
    AOS.init();
  }, [])  
  
  AOS.init({
    duration: 700,
  })

    return(
        <div className="steps-container">
              <h1 className="steps-title" data-aos = "fade-down">
               EMERGING TECHNOLOGIES: AI
              </h1>
              <h2 className="steps-subtitle" data-aos = "fade-down">Its more than chatGPT!</h2>
              <div className="steps-space">
                <div className="step">
                    <h1 className="step-num-bg" data-aos ="zoom-in">
                      1
                    </h1>
                    <h2 className="step-title" data-aos = "fade-right">
                   Impact on Individuals
                    </h2>
                    <h3 className="step-des" data-aos = "fade-right">
                    Job Market: AI automation may lead to job displacement in certain sectors, necessitating workforce reskilling. Simultaneously, AI-driven technologies create new job opportunities in fields such as data science and AI development.
Personal Assistants: Virtual assistants and AI-powered devices enhance convenience in daily life, from smart homes to voice-activated search engines, improving user experience and accessibility.
                    </h3>
                    <br/>
                    <h3 className="step-des" data-aos = "fade-right">
Personal Assistants: Virtual assistants and AI-powered devices enhance convenience in daily life, from smart homes to voice-activated search engines, improving user experience and accessibility.
                    </h3>

                </div>
                <div className="step">
                <h1 className="step-num-bg" data-aos ="zoom-in">
                      2
                    </h1>
                    <h2 className="step-title" data-aos = "fade-up">
                    Impact on Society and Culture
                    </h2>

                    <h3 className="step-des" data-aos = "fade-right">
                    Healthcare: AI aids in medical diagnostics, drug discovery, and personalized treatment plans, contributing to improved healthcare outcomes. Ethical considerations arise regarding patient privacy and data security.
                    </h3>

                    <br/>

                    <h3 className="step-des" data-aos = "fade-right">
                    Art and Creativity: AI-generated art challenges traditional notions of creativity and authorship, prompting cultural discussions on the intersection of technology and artistic expression.
                    </h3>
                </div>
                <div className="step">
                <h1 className="step-num-bg" data-aos ="zoom-in">
                      3
                    </h1>
                    <h2 className="step-title" data-aos = "fade-left">
                    Impact on Economy
                    </h2>

                    <h3 className="step-des" data-aos = "fade-right">
                    Productivity and Efficiency: AI streamlines processes, boosts productivity, and drives efficiency across industries. However, concerns regarding job displacement and economic inequality must be addressed through policies and educational initiatives.</h3>

                    <br/>

                    <h3 className="step-des" data-aos = "fade-right">
                    Innovation: AI fosters innovation by automating routine tasks, allowing professionals to focus on creative problem-solving and strategic thinking.
                    </h3>
                </div>
              </div>

        </div>
       

        
    )
}