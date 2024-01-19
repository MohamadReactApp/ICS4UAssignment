import React from 'react'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function IndexCarBuyPage() {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [duration, setDuration] = useState(0)
  const [price,setPrice] = useState(0);

  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []) 

  AOS.init({
    duration: 1000,
  })
        
 

  
  function handleItemClick(option){
    if(option === 'day'){
      setPrice(location.state.carInfo.dailyRP)  
    }else if(option === 'week'){
      setPrice(location.state.carInfo.weeklyRP)  
    }else{
      setPrice(location.state.carInfo.monthlyRP)  
    }
      setSelectedOption(option);
    };

  function increaseA(){
    if(selectedOption!=""){
      setDuration(prevDuration => {
        return(prevDuration +1)
        
      } 
      
      )
      
      
    }
   return("")
    
      
  }

  function decreaseA(){
    if(selectedOption!=""){
      setDuration(prevDuration => {
        return(duration != 0 ? prevDuration -1: 0)
  
      })
     
      
    }
   return("")
    
      
  }


  


  return (
    <>
      <Header/>
      {location.state.carInfo.description && 
      
      <div style={{display: "flex", alignItems: "center", width: "90%", marginTop: "5%", justifyContent: "space-evenly", background: "rgb(10,19,30)", marginLeft: "6%", color: "white", borderRadius: "20px"}}>
      <h1>
        CAREER DESCRIPTION
      </h1>
      <p style={{width:"50%"}}>
        {location.state.carInfo.description}
        </p>
        </div>}
      <div className='carBuy-container'>
          <div data-aos = "fade-right">
          <img src = {location.state.carInfo.imageURL} className='carBuyImage' data-aos = "fade-right"/>
          <h1 className ="carBuyCarName" style={{marginLeft:"10%"}}>
        {location.state.carInfo.name}
       </h1>
       <h1 className ="carBuyCarName" style={{marginLeft:"10%", fontSize: "25px"}}>
        Duration: {duration} {selectedOption === "" ? "please select time(Right)" : selectedOption}{duration === 1 || selectedOption=== "" ? "" : "s"}
       </h1>
       <h1 className ="carBuyCarName" style={{marginLeft:"10%", fontSize: "20px"}}>
        Salary: ${price*duration}
       </h1>

          </div>
          <ul className='carBuy-price-container'>
            <li onClick={()=>handleItemClick('day')}
          style={{ borderColor: selectedOption === 'day' ? 'rgb(10,19,30)' : 'transparent' }} data-aos = "fade-left">
              <p className='carBuy-price-text'>${location.state.carInfo.dailyRP}/Day</p>
            </li>
            <li onClick={()=>handleItemClick('week')}
          style={{ borderColor: selectedOption === 'week' ? 'rgb(10,19,30)' : 'transparent' }} data-aos = "fade-left">
              <p className='carBuy-price-text'>${location.state.carInfo.weeklyRP}/Week</p>
            </li>
            <div style ={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
            <li onClick={()=>handleItemClick('month')}
          style={{ borderColor: selectedOption === 'month' ? 'rgb(10,19,30)' : 'transparent' }} data-aos = "fade-left">
            <p className='carBuy-price-text'>${location.state.carInfo.monthlyRP}/Month</p>
            </li>
            <div className='carBuyDuration'>
                  <h1 className='carBuyDurationNum ' style={{padding: duration > 9 ? "9% 11.5%" :"9% 14.5%" }} data-aos = "zoom-in">{duration}</h1>
                <div className='carBuyDurationMods no-select' data-aos = "fade-left">
                  <h1 className='carBuyDurationIncrease no-select' onClick = {increaseA}>+</h1>
                  <h1 className='carBuyDurationDecrease no-select' onClick = {decreaseA}>-</h1>
                </div>
            </div>
          </div>
          </ul>
          
      </div>
      <div style={{marginTop:"10%"}}>
      <Contact/>
      </div>
      
      <Footer/>
    </> 
  )
}
