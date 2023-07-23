import React, {useState, useEffect} from "react";
import GIF from "./images/Algebra_logo.gif";
import themala from './images/themala.gif';
import logo from './images/logo.png';
import donut from './images/donuts.jpg';
import {Link} from "react-router-dom";


function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2200)
  },[])

  return (
  <div>
        {
      loading ? (
        <div style={{textAlign: "center"}}>
      <img src={GIF} loading={loading} class="opener" />
      </div>

      ) : (
      <>
     <section id ="top"></section>
      <div class="borders">
        <br></br>
        <br></br>
        <h2 style={{textAlign: "center"}}><b>SELECT YOUR BEEF BONE BROTH</b><br></br><br></br><img src={logo} style={{ width: "15%"}}/></h2>
        <section id ="hook">
          <div class="thick">
          <Link to="/QR1" onClick={() => {window.scroll(0, 0);}}>
          <img src={themala} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Original</button>
          </Link>
          </div>
          <div class="thick">
          <Link to="/QR2" onClick={() => {window.scroll(0, 0);}}>
          <img src={donut} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Seaweed</button>
          </Link>
          </div>
        </section>
      </div>
      <br></br>

</>
            )
                  }
      </div>


  );
}

export default Home;
