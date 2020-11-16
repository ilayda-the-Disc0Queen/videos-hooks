import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
console.log(process.env.REACT_APP_API_KEY);


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // provided inline on like 41
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };
  // YOU COULD ALSO JUST HAVE THE FOLLOWING
  // onVideoSelect={setSelectedVideo}
  // because you're taking one object and literally just
  // passing it on

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
            onVideoSelect={(video) => setSelectedVideo(video)}
            videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
