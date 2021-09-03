import React from 'react';
import './videoList.css';
import VideoItem from '../videoItem/videoItem';

const VideoList = (props) => (
    <ul>
      {props.videos.map(video => {
        return <VideoItem video={video} key={video.id}/>
       })}
    </ul>
      
  );

export default VideoList;