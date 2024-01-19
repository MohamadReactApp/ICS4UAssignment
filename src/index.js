
import App from "./App"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import IndexCarBuyPage from "./indexCarBuyPage"
import ReactDOM from 'react-dom';
import Catalogue from "./CarsCatalogue"
import Financing from "./Financing";
import shoppingCartPage from "./shoppingCartPage";




export default function Index(){

  return(
    <>
      <Router>
        <Routes>
          <Route path ="/" element ={<App/>}/>
          <Route path ="/buyCar" element ={<IndexCarBuyPage/>}/>
          <Route path = "/CarsCatalogue" element ={<Catalogue/>}/>
          <Route path = "/Financing" element ={<Financing/>}/>

        </Routes>
      </Router>
    
    </>
  )
}
    


ReactDOM.render(<Index/>, document.getElementById("root"))




