import { Avatar, Button } from '@material-ui/core'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import React from 'react'
import "./Channelrow.css"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
function ChannelRow({verified , channelName ,subscriber , video , discription , image }) {
    return (
        <div className="searchpage_channel">
       <Avatar src={image} className="channel_avatar" />
        <div className="channeldiscription">
            <h4>{channelName} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>

            <p>{subscriber} subscribers . {video} videos </p>
            <p>{discription}</p>
        </div>
        <div className="channelbutton">
            <Button> subscrib </Button>
            <NotificationsActiveIcon id="notification" />
        </div>
      
        </div>
    )
}

export default ChannelRow
