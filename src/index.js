import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import U2 from 'youtube-api-search';
import _ from 'lodash';

const YOUTUBE_API_KEY = 'please paste your API key here';

class App extends Component {
  constructor(props) {
    super(props);
    this.videoSearch = this.videoSearch.bind(this);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('花甲男孩轉大人');
  }

  videoSearch(term) {
    U2({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail videos={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => { this.setState({ selectedVideo }) }} videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));