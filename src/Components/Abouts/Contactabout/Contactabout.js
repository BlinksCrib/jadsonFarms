import React from 'react'
import "./Contactabout.css"

const Contactabout = () => {
  return (
     <section class="contacta">
        <div class="pad">
            <h1>Free Feel To Contact Us</h1>
            <div class="pac">
                <div class="contact-menu">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Head Office </h4>
                    <p>Federal House Estate, Oke Onitea, Osogbo, Osun State.</p>
                    <h4>Branch Office</h4>
                    <p>Km 3 Ikirun/Inisa Road, Ikirun, Osun State.</p>

                </div>
                <div class="contact-menu ">
                    <div class="backa">
                        <i class="fa-solid fa-phone"></i>
                        <p>08151240517</p>
                        <p>09071655051</p>
                    </div>
                </div>
                <div class="contact-menu">
                    <div class="backa">
                        <i class="fa-regular fa-envelope"></i>
                        <p> jadsonfarms <br />@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactabout