import React from 'react'
import "./videorow.css";
function VideoRow({views , subs , description ,timestamp , channel , title , image})
 {
    return (
        <div className="videorow">
          <img src={image} />
          <div className="videorow_text">
            <h3>{title}</h3>
            <p className="videorow_headline">
              {channel} . {" "} 
              <span className="videorow_subs">
              <span className="subs">{subs}</span> subscribers 
              </span> {" "}
              {views} views . {timestamp}
            </p>
            <p className="videorow_desc">{description}</p>
          </div>  
        </div>
    )
}

export default VideoRow
