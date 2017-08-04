import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const videos = [
  'https://www.youtube.com/embed/2J5GzHoKl1Q',
  'https://www.youtube.com/embed/_xTGsIHRIdA',
  'https://www.youtube.com/embed/GF60Iuh643I',
  'https://www.youtube.com/embed/VAZ5te90vlc',
  'https://www.youtube.com/embed/j-nlYxx-1Ck'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentVideoIndex: 0,
      currentVideoSource: videos[0]
    };
  }
  componentDidMount() {
    // Auto-switching
    setInterval(() => {
      const nextIndex = this.state.currentVideoIndex + 1;
      this.setState({
        currentVideoIndex: nextIndex,
        currentVideoSource: videos[nextIndex]
      });
    }, 30 * 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React TV</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <iframe
          width="640"
          height="360"
          src={this.state.currentVideoSource + '?autoplay=1'}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default App;
