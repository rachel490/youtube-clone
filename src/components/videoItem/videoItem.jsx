import React from 'react';

const href = "https://www.youtube.com/watch?v=";
const videoItem = (props) => (
  
  <li className='videos' >
    <a className='video-link' href={href+props.video.id}>
      <img
        className='video-image'
        src={props.video.snippet.thumbnails.default.url}
        alt='thumbnail'
      />
    </a>
    <div className='video-text'>
      <span className='video-text_title'>{props.video.snippet.title}</span>
      <span className='video-text_channel'>{props.video.snippet.channelTitle}</span>
    </div>
  </li>
);

export default videoItem;