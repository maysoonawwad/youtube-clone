import React from 'react'
import "./Searchpage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchp_filter" >
               <TuneOutlinedIcon />
               <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
            verified
            image= "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj"
            channelName = "clever programmer"
            subscriber = "964k "
             video = "583"
             discription = "You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            
             />
            <hr />
            <VideoRow
            views = "1.4M"
             subs = "659K"
             description = "This video was so much fun. I did a CSS battle and right after that I dove deep into @TensorFlow and made a real-time object detection app with React JS using Hackernoon's guide. Machine Learning + Tensorflow with React JS."
             timestamp = "59 seconds ago"
              channel = "Clever Programmer"
              title = "Face Detection + Machine Learning with React JS (Real Time Object Detection)"
              image = "https://i.ytimg.com/vi/IiGQmqw3XHo/maxresdefault.jpg"
            
             />
              <VideoRow
            views = "77K"
             subs = "659K"
             description = "In today's video, Sonny AKA papa React is BACK and he is building the highly anticipated DISCORD clone.  Let's go!!!"
             timestamp = "7 months ago"
              channel = "Clever Programmer"
              title = "🔴 Build a Discord clone with REACT.JS for beginners! (With REDUX)"
              image = "https://miro.medium.com/max/1400/1*vCa17423bnQ5NctxTqmQig.jpeg"
            
             />
              <VideoRow
            views = "1.4M"
             subs = "659K"
             description = "This video was so much fun. I did a CSS battle and right after that I dove deep into @TensorFlow and made a real-time object detection app with React JS using Hackernoon's guide. Machine Learning + Tensorflow with React JS."
             timestamp = "59 seconds ago"
              channel = "Clever Programmer"
              title = "Face Detection + Machine Learning with React JS (Real Time Object Detection)"
              image = "https://i.ytimg.com/vi/IiGQmqw3XHo/maxresdefault.jpg"
            
             />
              <VideoRow
            views = "1.4M"
             subs = "659K"
             description = "This video was so much fun. I did a CSS battle and right after that I dove deep into @TensorFlow and made a real-time object detection app with React JS using Hackernoon's guide. Machine Learning + Tensorflow with React JS."
             timestamp = "59 seconds ago"
              channel = "Clever Programmer"
              title = "Face Detection + Machine Learning with React JS (Real Time Object Detection)"
              image = "https://i.ytimg.com/vi/IiGQmqw3XHo/maxresdefault.jpg"
            
             />
              <VideoRow
            views = "1.4M"
             subs = "659K"
             description = "This video was so much fun. I did a CSS battle and right after that I dove deep into @TensorFlow and made a real-time object detection app with React JS using Hackernoon's guide. Machine Learning + Tensorflow with React JS."
             timestamp = "59 seconds ago"
              channel = "Clever Programmer"
              title = "Face Detection + Machine Learning with React JS (Real Time Object Detection)"
              image = "https://i.ytimg.com/vi/IiGQmqw3XHo/maxresdefault.jpg"
            
             />
        </div>
    )
}

export default SearchPage
