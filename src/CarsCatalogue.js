
import Cars from "./Cars"
import CarCards from './carCards';
import Contact from './Contact'
import Footer from './Footer'
import Header from "./Header";
import { useEffect } from "react";



export default function Catalogue() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const CatalogueCars = Cars.map(car =>{
    return(<CarCards carInfo = {car} key = {car.id}/>)
  })

  return(
    <div>
        <Header/>
    <div className='featuredCars-containerAll'> 
          <h1 style ={{overflow:"hidden"}}>
            All Careers
          </h1>
          <div className='featuredCars-Cards-containerAll' >
            {CatalogueCars}
    </div>

          
  </div>
  <Contact/>
  <Footer/>
</div>

  )
}