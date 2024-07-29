import Fever from './fever';
import Cold from './cold';
import Cough from './cough';
import Bodypains from './bodypains';
import Bloodpressure from './bloodpressure';
import Obesity from './obesity';
import Diabetes from './diabetes';
import Hairfall from './hairfall';
import Stress from './stress';







import {useState} from "react";
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
function Search(){
    const [arr,setArr]=useState(['fever','cold','cough','bloodpressure','bodypains','hairfall','diabetes','obesity','stress'])
    const [name,setname]=useState('')
    const Med=()=>{
        let filteredarray=arr.filter((ele)=>{
            return(ele===name)
            
        })
       if(filteredarray.length==0){
        setArr(['fever','cold','cough','bloodpressure','bodypains','hairfall','diabetes','obesity','stress'])
       }else{
        setArr(filteredarray)
       }

    
    }
  
    return(
    <div>
        <h1>Health Issues</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)}/>
        <Link to='/{Med}'>Search</Link>
        <br />
        <ul style={{'display':'inline-block'}}>
            {
              arr.map((ele,i)=>{
                return(<li key={i}>{ele}</li>)
              })
            }
            
        </ul>
    </div>
    )
};
export default Search;