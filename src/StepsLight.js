import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function StepsL(){
  useEffect(() => {
    AOS.init();
  }, [])  
  
  AOS.init({
    duration: 700,
  })

    return(
        <div className="steps-container light" id = "ET">
              <h1 className="steps-title light-text" data-aos = "fade-down">
               EMERGING TECHNOLOGIES: Internet of Things (IoT)
              </h1>
              <h2 className="steps-subtitle light-text" data-aos = "fade-down">Our offer is simple and without surprises!</h2>
              <div className="steps-space light">
                <div className="step light">
                    <h1 className="step-num-bg light-circle light-text" data-aos ="zoom-in">
                      1
                    </h1>
                    <h2 className="step-title light-text" data-aos = "fade-right">
                   Impact on Individuals
                    </h2>
                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Connected Living: IoT devices enhance daily life through smart homes, wearable tech, and connected appliances, offering convenience, energy efficiency, and personalized experiences.
                    </h3>
                    <br/>
                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Health and Fitness: IoT contributes to health monitoring with wearables, facilitating preventive healthcare and real-time health data tracking.
                    </h3>

                </div>
                <div className="step light">
                <h1 className="step-num-bg light-circle light-text" data-aos ="zoom-in">
                      2
                    </h1>
                    <h2 className="step-title light-text" data-aos = "fade-up">
                    Impact on Society and Culture
                    </h2>

                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Smart Cities: IoT enables the development of smart cities with connected infrastructure, improving urban planning, transportation, and resource management. Privacy concerns and data security considerations arise.

                    </h3>

                    <br/>

                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Cultural Exchange: Global connectivity facilitates cultural exchange and cross-cultural communication, breaking down geographical barriers.
                    </h3>
                </div>
                <div className="step">
                <h1 className="step-num-bg light-circle light-text" data-aos ="zoom-in">
                      3
                    </h1>
                    <h2 className="step-title light-text" data-aos = "fade-left">
                    Impact on Economy
                    </h2>

                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Industrial IoT (IIoT): In manufacturing and industry, IIoT enhances operational efficiency, predictive maintenance, and resource optimization. This contributes to economic growth and sustainability.</h3>

                    <br/>

                    <h3 className="step-des light-text" data-aos = "fade-right">
                    Supply Chain Management: IoT improves supply chain visibility, reducing costs and enhancing logistics, benefiting the economy through improved trade and commerce.
                    </h3>
                </div>
              </div>

        </div>
       

        
    )
}