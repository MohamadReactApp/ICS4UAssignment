import Cars from "./Cars"
import CarCards from './carCards';
import Contact from './Contact'
import Footer from './Footer'
import Header from "./Header";
import shoppingCart from "./shoppingCart";



export default function shoppingCartPage() {
  const CatalogueCars = Cars.map(car =>{
    return(<CarCards carInfo = {car} key = {car.id}/>)
  })

  return(<h1>
    {shoppingCart.length === 0 ? "No items in cart": shoppingCart}
  </h1>)

}