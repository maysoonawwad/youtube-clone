import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css"
function Video({image, title , channel,timestamp,views , channelimg }) {
    return (
        <div className="video">
          <img className="videocard_img" src={image} alt=""/>
         
          
          <div className="video_info" >
          <Avatar className="video_avatar" alt={channel}  
          src={channelimg} />
          <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
           {views} . {timestamp}
            </p>
          </div>
          </div> 
        </div>
    )
}

export default Video
