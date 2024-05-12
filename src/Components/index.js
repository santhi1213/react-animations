import chrome from '../Logos/chrome.jpg';
import React, {useEffect} from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
import LandingPage from './LandingPage.js';
import Update from './update.js';
import AI from './AI.js'
import Fast from './fast.js'
import Yours from './Yours.js';


function Index(){
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    return(
        <>
            <div className= 'banner'>
                <img className= 'chrome' src = {chrome} data-aos="fade-up"/>
                <h1 className= 'ban_txt' data-aos="fade-up">The browser<br/> built to be Yours </h1>
            </div>
            <div className= 'Navbar' data-aos="fade-up">
                <ul>
                    <li><a href='#update'>Updates</a></li>
                    <li><a href='#ai'>AI</a></li>
                    <li><a href=''>Yours</a></li>
                    <li><a href=''>Safe</a></li>
                    <li><a href='#fast'>Fast</a></li>
                    <li><a href=''>By Google</a></li>
                </ul>
            </div>      

            <div id='landingPage'>
                <LandingPage />
            </div> 
            <div id='update'>
                <Update />
            </div> 
            <div id='ai'>
                <AI />
            </div> 
            <div id='yours'>
                <Yours/>
            </div>
            <div id='fast'>
                <Fast />
            </div>     
        </>
    )
}

export default Index;