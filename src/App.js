import React, { Component } from 'react';
import axios from 'axios';

import Search from './components/Search'
import Video from './components/Video'
import VideoList from './components/VideoList'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }

  handleSubmit = async (query) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=AIzaSyB3i7AApT73is_nB6cCuxqOw9LTFPovMXw&q=${query}`;
    const res = await axios.get(url);

    this.setState({
      videos: res.data.items, selectedVideo: res.data.items[0],
    })
  }

 
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    return (
      <div>
        <div className="search-cont">
          <Search onFormSubmit={this.handleSubmit}/>
        </div>
        <div className="display">
          <Video video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </div>
    )
  }
}

export default App;
