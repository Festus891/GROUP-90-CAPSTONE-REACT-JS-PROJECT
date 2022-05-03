import React from "react";
import './footer.css'
import kfc from './kfc3.jpg'
import kilimanjaro from './kiliman1.png'
import mrbiggs from './mrb1.png'
import fb from './Facebook_Logo.png'
import ig from './instagram-icon.jpg'
import tw from './twitter.jpg'
import mac from './mcdonald.jpg'


function Footer() {
    return (
        <div className="entire-box">
            <div className="top-footer">
                <h2>Top Partners</h2>
                <img className="kfc" src={kfc} alt="kfc-logo"></img>
                <img className="kilimanjaro" src={kilimanjaro} alt="kilimanjaro-logo"></img>
                <img className="mrB" src={mrbiggs} alt="mrb"></img>
                <img className="mac" src={mac} alt="mrb"></img>
            </div>
            <footer className="bottom-footer">
                <div>
                    <h4>ADDRESS</h4>
                    <p>PLOT 15 SIDEHUSTLE ESTATE, ABUJA, NIGERIA</p>
                    <h4>OFFICE HOURS</h4>
                    <p>Monday - Friday (7:30am - 8:00pm)</p>
                    <p>Saturday - Sunday (8:00am -7:00pm)</p>
                </div>
                <div className="group">
                <h4>GROUP 90 RESTURANT</h4> <br></br>
                <p className="footer-link"><a href="www.google.com">visitourggithub</a> </p>
                </div>
                <div className="follow-us">
                    <h4>Follow Us</h4> 
                    <img className="icons" src={fb} alt="fb-icon"></img>
                    <img className="icons" src={ig} alt="ig-icon"></img>
                    <img className="icons" src={tw} alt="tw-icon"></img>
                </div>
            </footer>
        </div>   
        
    )
}

export default Footer