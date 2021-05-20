
import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css"
import SidebarRow from "./SidebarRow.js";
function Sidebar() {
    return (
        <div className="sidebar">
         <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" /> 
         <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending" /> 
         <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" /> 
        <hr />
        <SidebarRow  Icon={VideoLibraryOutlinedIcon} title="Library" /> 
         <SidebarRow  Icon={HistoryOutlinedIcon} title="History" /> 
         <SidebarRow  Icon={OndemandVideoIcon} title="Your Videos" /> 
         <SidebarRow  Icon={WatchLaterIcon} title="Watch Later" /> 
         <SidebarRow  Icon={ThumbUpAltIcon} title="Liked Videos" /> 
         <SidebarRow  Icon={ExpandMoreIcon} title="Show more" /> 
         <hr />
        </div>
    )
}

export default Sidebar
