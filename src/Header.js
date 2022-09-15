import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from "@material-ui/core";


function Header() {
  return (
    <div className="header">
    <Link to ='/'>
    <img className='header_icon' src="https://www.brandcolorcode.com/media/airbnb-logo.png" alt="airbnb" />
        
    </Link>
    <div className="header_center">
            <input type="text" />
            <SearchIcon/>
        </div>
        <div className="header_right">
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <AccountCircleIcon/>
            {/* <Avatar/> */}
        </div>      
    </div>

  )
}

export default Header
