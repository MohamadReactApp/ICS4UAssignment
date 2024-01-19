import LOGO from "./images/darkLogo.png"


export default function Footer(){
  return(
      <footer className="footer-container">
            <div className="copyright-text">
            © ICS4U
            </div>
            <div style={{display: "flex", alignItems: "center", gap:"10%"}}>
              <img src="https://www.worldatlas.com/r/w1200/img/flag/ca-flag.jpg" width={"60px"}/>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" width={"60px"}/>
            </div>

            <div>
            <img src= "https://cdn-icons-png.flaticon.com/512/9969/9969512.png" alt = "logo "width = "70px"/>
            </div>
      </footer>)
}