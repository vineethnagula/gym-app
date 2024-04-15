import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Numbercounter from 'number-counter'
import {motion} from 'framer-motion'

const Hero = () => {

  const transistion = {type : 'spring' , duration:3}
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id='Home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div 
          initial={{left: mobile? '160px':'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transistion , type: 'tween'}}
          ></motion.div>
          
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* {Figures} */}
        <div className="figures">
          <div>
            <span>
            <Numbercounter end={140} start={100} delay='5' preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><Numbercounter end={978} start={150} delay='1' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><Numbercounter end={50} start={5} delay='2' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* {hero buttonss} */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{right: '-1rem'}} 
          whileInView={{right: '4rem'}}
          transition={transistion}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        
        {/* {hero images} */}
        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img 
        initial={{right: '11rem'}} 
        whileInView={{right: '20rem'}}
        transition={transistion}
        src={hero_image_back} alt="" className="hero-image-back"/>

        {/* {calories} */}
          <motion.div
             initial={{right: '37rem'}} 
             whileInView={{right: '28rem'}}
             transition={transistion}
            className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
