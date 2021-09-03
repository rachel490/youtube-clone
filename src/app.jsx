import './app.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar/searchBar';
import VideoList from './components/videoList/videoList';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    // const API_KEY_15 = 'AIzaSyANisTUQjLFLaB1DI-jHriie0Bpy6ZXo58';
    // const API_KEY_09 = `AIzaSyDchtdMatBF2nEF27xhvkPENC-1hT2-his`;
    const API_KEY_DWELL = 'AIzaSyB1BZEjVj8KrMQIX_nWWaGDIUHy9ohloUE';

    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=${API_KEY_DWELL}`;
    const responseOptions = {
      method : 'GET', 
      redirect : 'follow'
    }

    fetch(URL, responseOptions)
    .then(response => response.json())
    .then(data => setVideos(data.items))
    .catch(error => console.log(error))
    
  },[])

  return (
    <>
      <SearchBar />
      <VideoList videos={videos} />
      {/* <Trending /> */}
    </>
  );
}

export default App;
