import React from 'react';
import "./Footer.css";
import Jadsonbgremoved1 from '../../assets/Jadsonbgremoved1.png';

const Footer = () => {
  return (
      <section>
        <footer >
            <div class="par">
                <div class="paf">
                    <div class="part">
                        <div class="part-image">
                            <i class="fa-solid fa-circle circle"></i>
                            <p>Jadson <b/> Integrated Farms & Services </p>
                        </div>
                        <h1 className='reduce'>JADSON INTEGRATED FARMS & SERVICES LTD.</h1>
                    </div>
                    <div class="part">
                        <h1>LINKS</h1>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div class="part">
                        <button class="contac-us">Contact Us</button>

                        <div class="socials">
                            <div class="icon">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div class="icon">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div class="icon">
                                <i class="fab fa-youtube"></i>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="par1">
                <div class="paf1">
                 <div class="pad">
                     <button class="contac-us">Contact Us</button>
                     <div class="socials">
                         <div class="icon">
                             <i class="fa-brands fa-facebook-f"></i>
                         </div>
                         <div class="icon">
                             <i class="fab fa-twitter"></i>
                         </div>
                         <div class="icon">
                             <i class="fab fa-youtube"></i>
                         </div>
                     </div>
                     <div class="part-image">
                         <i class="fa-solid fa-circle circle"></i>
                         <p>Jadson <br/> Integrated Farms & Services </p>
                     </div>
                     <h1>JADSON INTEGRATED FARMS & SERVICES LTD.</h1>
                     <div class="links">
                         <h1>LINKS</h1>
                         <ul>
                             <li>Home</li>
                             <li>Services</li>
                             <li>About Us</li>
                             <li>Contact Us</li>
                         </ul>
                     </div>
                 </div>
 
                </div> 
             </div>
            <div class="technology">
                <div class="pak">
                    <p>Copyright &copy; 2022 || All rights reserved</p>
                    <p>Developed by FireSwitch Technologies</p>  
                </div> 
            </div>
        </footer>
    </section>   
  )
}

export default Footer
