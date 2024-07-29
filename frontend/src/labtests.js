import a1 from './lab.webp'
import a2 from './lab2.png'
const Labtests = () =>{
    return(
        <div>
            <br/>
            <center><h2 style={{color:"brown"}}>Lab Tests</h2></center>
            <img src={a1} alt="_" style={{height:"220px",width:"100%"}}></img>
            <br/>
            <img src={a2} alt="_" style={{height:"220px",width:"100%"}}></img>
            <br/>
            <center><h3 style={{color:"green"}}>About Labs</h3></center>
            <h4>Full body health check-up</h4>
            <p style={{fontSize:"10px"}}>A basic full body check-up typically includes a physical exam to check blood pressure, heart rate, weight, and height, along with blood tests to check complete blood count, cholesterol, blood sugar, and kidney function. It may also include a urinalysis and screening for certain cancers, such as breast or prostate. The whole process usually takes a few hours and is recommended for adults every 1-2 years.</p>
            <h4>Types of tests included in full body check-up package</h4>
            <ul style={{fontSize:"10px"}}>A health test package includes a range of medical tests and screenings to assess an individual's overall health. Some of the common tests included in a full body check-up may include:</ul>
            <li style={{fontSize:"10px"}}><b>Blood tests:</b> To check for conditions like diabetes, high cholesterol, and liver or kidney problems.</li>
            <li style={{fontSize:"10px"}}><b>Imaging tests:</b> Such as X-rays, CT scans, or MRI scans to detect any abnormalities in organs or tissues.</li>
            <li style={{fontSize:"10px"}}><b>ECG:</b> To check the heart's health and detect any issues like arrhythmia.</li>
            <li style={{fontSize:"10px"}}><b>Pulmonary function tests:</b> To evaluate lung function.</li>
            <li style={{fontSize:"10px"}}><b>Physical examination:</b> To check for any physical abnormalities or symptoms.</li>
            
            <br/>
            <h4>Price of health check-up packages</h4>
            <p style={{fontSize:"10px"}}>The cost of health check-up packages may vary from Rs. 799 to Rs. 20,000 based on the facility, location and the types of tests included. One can book lab tests online on the Netmeds website to avail better rates or book a lab test at home as per their convenience.</p>
            <br/>
            <h4>FAQs</h4>
            <h5>Q: What are the benefits of a full body health check-up?</h5>
            <p style={{fontSize:"10px"}}><b>A: </b>A full body health check-up can provide numerous benefits, including early detection and prevention of potential health problems. It can identify risk factors for chronic diseases and provide insights into an individual's overall physical and mental health. With this information, individuals can make more informed decisions about their lifestyle, including diet and lifestyle choices, and receive guidance on managing any identified health risks.</p>
            <br/>
            <h5>Q: Is a complete health check-up necessary?</h5>
            <p style={{fontSize:"10px"}}><b>A: </b>A full body check-up may not be necessary for everyone, but it can be beneficial for detecting potential health issues at an early stage.</p>
        </div>
    )
}
export default Labtests;