
import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import video-react styles
import './VideoPlayer.css'; // import custom styles

const VideoPlayer = ({ videoSource }) => {
  return (
    <div className="video-player-container">
      <Player src={videoSource} fluid={true}/>
    </div>
  );
};

export default VideoPlayer;


// Following Swipable code does not work */
/*
import React, { useState } from 'react';
import { Player } from 'video-react';
import { Swipeable } from 'react-swipeable';
import 'video-react/dist/video-react.css'; // import video-react styles
import './VideoPlayer.css'; // import custom styles

const VideoPlayer = ({ videoSources }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleSwipe = (event, deltaX, deltaY, isFlick) => {
    if (isFlick) {
      if (deltaX < 0 && currentVideoIndex < videoSources.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else if (deltaX > 0 && currentVideoIndex > 0) {
        setCurrentVideoIndex(currentVideoIndex - 1);
      }
    }
  };

  return (
    <Swipeable onSwiped={handleSwipe}>
      <div className="video-player-container">
        <Player src={videoSources[currentVideoIndex]} fluid={true} />
      </div>
    </Swipeable>
  );
};


export default VideoPlayer;
*/
