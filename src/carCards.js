import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function CarCards(props){

  useEffect(() => {
    AOS.init();
  }, []) 

  AOS.init({
    duration: 1000,
  })
              const carObj = props.carInfo
              const trending = carObj.isTrending ?<div className="carCardTrendingTag">
              TRENDING
            </div> : "" ;


              const navigate = useNavigate()

              function goToBuyPage(){
                    navigate("/buyCar", {state: {carInfo: carObj}})

              }
        return(<div className="carCard" data-aos ="flip-up">
                {trending}
                <div className="carCardInfo">
                <img  className = "carCard-img" src={carObj.imageURL}/>
                <h1 className="carCard-title">
                   {carObj.name}
                </h1>
                <h3 className="carCard-price  no-select">
                  ${carObj.dailyRP}/Day
                </h3>
                <h3 className="carCard-price  no-select">
                ${carObj.weeklyRP}/Week
                </h3>
                <h3 className="carCard-price no-select">
                ${carObj.monthlyRP}/Month
                </h3>
                </div>
                <button className= "carCardButton" onClick={goToBuyPage}>
                        READ MORE
                </button>
        </div>)

}