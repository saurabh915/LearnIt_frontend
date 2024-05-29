import React from 'react'
import "./Home1.css";
import Footer from './Footer';
import Navbar from './Navbar/Navbar';


// import backhome from './Welcome/IMG/backhome';
export default function Home1() {
  return (
<>
 <Navbar/>

    <div className='header1'>
      
      {/* -------------------- First Box -------------------- */}
      <section className="home" id="home">
        <div className="content">
          <h5>Explore new Learning horizons</h5>
          <p>"Empowering slow learners with personalized, effective, and supportive learning solutions to unlock their full potential."</p>
          <a href="#about"><button className="about">About Us</button></a>
        </div>
      </section>

      {/* -------------------- Second Box ------------------------- */}

      <section className="home3" id="home3">
        <div className="content3">
         <h1>Services</h1>
         <div class="container-box">
    <div class="Homebox1">hi</div>
    <div class="Homebox2"></div>
    <div class="Homebox3"></div>
</div>
        </div>

      </section>
      {/* -------------------- Three Box ------------------------- */}
      <section class="home2" id="home2">
    <div class="container0">
        <div class="about-us">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus vitae elit laoreet ultrices.</p>
        </div>
        <div class="about-us1">

          
            {/* <h1>Second Box</h1> */}
        </div>
    </div>
</section>
      <section className="about" id="about">
      <Footer/>
      </section>
    </div>
    </>
  )
}
