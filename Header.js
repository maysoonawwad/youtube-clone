import React, { useState } from 'react'
import "./Header.css"
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Link } from 'react-router-dom';
function Header() {
 const [input , setInput] = useState("");
 

    return (
        <div className="header">
        <div className="left_header">
        <MenuOutlinedIcon />
        <Link to="/">
          <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"/>
          </Link>
        </div>
           <div className="search">
           <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search" type="text"/>
              <Link to={`/search/${input}`}>
              <SearchOutlinedIcon className="header_inputButton" />
              </Link>
           </div>
           
            <div className="right_header">
            <NotificationsIcon className="header_icon" />
                    <AppsIcon className="header_icon" />
                <VideoCallIcon className="header_icon" />
            <Avatar />
           </div>
           
        
            
        </div>
    )
}

export default Header;
