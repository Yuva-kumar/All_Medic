
import { ImageData } from './images';
import { ImageData1 } from './images1';
import ImageSliderAuto from './ImageSliderAuto';
// import ImageSliderAuto1 from './ImageSliderAuto1';
import img1 from './img1.jpg';
import img5 from './img5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container,Card, Col, Button,Modal} from 'react-bootstrap';  
import pic from './fever.jpg';
import pic1 from './cancer.png';
import pic2 from './braintumor.jpg';
import pic3 from './obesity.jpg';
import pic4 from './tuber.jpg';
import pic5 from './six.jpg';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useEffect} from 'react';




const Home = () =>{
    return(
      
        <div>
          <br/>
       
               <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 2000}/>
          <>
        <br/>
            <center><h1 style={{fontFamily:"italic",color:"red"}}>Diseases</h1></center>
            <br/>
            </>
        
            <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
      <img src={pic} class="card-img-top" alt="..." style={{height:"150px"}} />
      <div class="card-body">
        <h5 class="card-title">Fever</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>A fever is typically a symptom rather than a disease itself. 
        It is often a sign that the body is responding to an infection or other medical condition. Common 
        causes of fever include viral or bacterial infections, 
        inflammatory conditions, certain medications, and heat-related illnesses.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={pic1} class="card-img-top" alt="..." style={{height:"150px"}} />
      <div class="card-body">
        <h5 class="card-title">Blood cancer</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>
Blood cancer, also known as hematologic cancer, refers to cancers that affect the blood, bone marrow, and lymphatic system
Leukemia: This type of cancer affects the blood and bone marrow. It is characterized by the rapid production of abnormal white blood cells. Leukemia can be acute.. </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={pic2} class="card-img-top" alt="..." style={{height:"150px"}} />
      <div class="card-body">
        <h5 class="card-title">Brain Tumour</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>A brain tumor is an abnormal growth of cells in the brain. Tumors can be either benign (non-cancerous) or malignant (cancerous). The exact cause of most brain tumors is unknown, and they can occur in people of all ages.
        Brain tumors can be primary or secondary. 
        .
        .
         </p>
        </div> 
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src={pic3} class="card-img-top" alt="..." style={{height:"150px"}} />
      <div class="card-body">
        <h5 class="card-title">Obesity</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>
Obesity is a medical condition characterized by an excessive accumulation of body fat. It is typically measured using the body mass index (BMI), which is calculated by dividing a person's weight in kilograms by the square of their height in meters. A BMI of 30 or higher is generally considered indicative of obesity</p>
        </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src={pic4} class="card-img-top" alt="..." style={{height:"150px"}} />
      <div class="card-body">
        <h5 class="card-title">TuberCulosis</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>Tuberculosis (TB) is a potentially serious infectious disease caused by the bacterium Mycobacterium tuberculosis. 
        It primarily affects the lungs but can also involve other parts of the body, such as the kidneys, spine, and brain. TB is a contagious disease that spreads through the air when an infected person coughs, sneezes, or speaks.</p>
        </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <img src={pic5} class="card-img-top" alt="..." style={{height:"150px"}}/>
      <div class="card-body">
        <h5 class="card-title">Aids</h5>
        <p class="card-text" style={{fontSize:"10px",textAlign:"justify"}}>
Acquired Immunodeficiency Syndrome (AIDS) is a late stage of HIV (Human Immunodeficiency Virus) infection.HIV is primarily transmitted through unprotected sexual intercourse,HIV attacks the immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to the disease AIDS.</p>
        </div>
    </div>
  </div>
  </div>
  </div>


    )
    }

export default Home;