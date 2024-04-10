import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const videoSources = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  ];
  return (
    <div className="App">
      <h1>Video Player App</h1>
      <VideoPlayer videoSource={videoSources[0]} />
    </div>
  );
}

export default App;