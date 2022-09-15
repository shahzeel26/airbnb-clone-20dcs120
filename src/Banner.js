import React,{useState} from 'react'
import './Banner.css'
import Search from './Search';
import { useNavigate } from "react-router-dom";
function Banner() { 
 const navigate=useNavigate();
  
  const [showSearch,setShowSearch]=useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
      {showSearch && <Search/>}
      
        <button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton">
          {showSearch ? "Hide":"Search Dates"}
        </button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
        {/* <Button variant='outlined'>
        Explore Nearby
     </Button> */} 
        <button onClick={() => navigate('/search')}>Explore Nearby</button>
      </div>
      
    </div>
  )
}

export default Banner