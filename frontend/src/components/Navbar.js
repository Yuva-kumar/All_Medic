import { NavLink } from 'react-router-dom'
import '../navbar.css'
import im from  "./logo.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BiSolidFirstAid} from "react-icons/bi";
import {FaHandHoldingMedical} from "react-icons/fa";
import {MdHealthAndSafety} from "react-icons/md";
import {RiHandSanitizerFill} from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
      <img src={im} alt="logo.jpeg" style={{height:"30px",width:"30px",borderRadius:"100%"}} ></img>
      <span style={{marginLeft:"15px",fontSize:"15px",color:"white"}}>Allmedic</span><span style={{fontSize:"6px",color:"white"}}>.com</span>
      <label style={{color:"white",fontSize:"15px",marginLeft:"20px",marginRight:"20px"}}>search:</label>
      <input type='text' placeholder='search for your health issues....' style={{width:"200px",height:"30px",fontSize:"10px",borderRadius:"10px"}}></input>
    
            </div>
            <center>
        <div className="nav-elements">
          <ul>
            <li>
            
            <BiSolidFirstAid style={{fontSize:"20px",color:"white"}}/><NavLink to="/" style={{fontSize:"10px",color:"white",textDecoration:"none"}}>Home</NavLink>
            </li>
            <li>
            <FaHandHoldingMedical style={{fontSize:"20px",color:"white"}}/><NavLink to="/labtests" style={{fontSize:"10px",color:"white",textDecoration:"none"}}>Lab Tests</NavLink>
            </li>
            <li>
            <RiHandSanitizerFill style={{fontSize:"20px",color:"white"}}/><NavLink to="/about" style={{fontSize:"10px",color:"white",textDecoration:"none"}}>About</NavLink>
            </li>
            <li>
            <BiSolidFirstAid style={{fontSize:"20px",color:"white"}}/><NavLink to="/medic" style={{fontSize:"10px",color:"white",textDecoration:"none"}}>Medical Camp</NavLink>
            </li>
          </ul>
        </div>
        </center>
      </div>
    </nav>
  )
}

export default Navbar