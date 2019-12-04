import React, { Component } from 'react';
import Search from './components/Search'
import Video from './components/Video'
import VideoList from './components/VideoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="search-cont">
          <Search />
        </div>
        <Video />
        <VideoList />
      </div>
    )
  }
}

export default App;
