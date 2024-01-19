import React from "react"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




export default function About(){
  const navigate = useNavigate();

  const goToCatalogue = () => {
    // Scroll to the target element
    const targetSection = document.getElementById('CD');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

useEffect(() => {
  AOS.init();
}, [])  

AOS.init({
  duration: 900,
})

  return(
    <>
      <div style = {{marginTop:"100px", height:"100px", width: "100%"}} id = "About-us">

</div>
<div className = "About-container" data-aos = "fade-up">
<img src ="https://imgs.search.brave.com/7sPwCLWyzkgXhdLdDyq6ld5CmNK7Wg7FeoItsxpgPU0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE0/Nzc1NzcwL3Bob3Rv/L21hbi1kcml2aW5n/LWNhci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ODlhLTEx/TWRwazZlLVpWMzdG/c2x1c0dnVG1ITGZh/MUVVMUhoWDZnTWIy/WT0" className="About-img"/>
<div className = "About-text-container">
<h1 id='About-us'>
  Introduction!
</h1>
<h2>
CS, a world of LIMITLESS possibillities!
</h2>
<p className="About-body-text">
We embark on a journey encompassing the impact of emerging technologies on societies and economies, explore key careers in computer studies with their educational prerequisites, and introspectively assess essential skills crucial for success in this dynamic field, aligning with the Ontario Skills Passport. This comprehensive exploration illuminates the interconnected nature of technology's influence on our world and personal development.

</p>
<button className="About-shopButton" onClick={goToCatalogue} >
  READ MORE
</button>
</div>


</div>
    </>
    )
}