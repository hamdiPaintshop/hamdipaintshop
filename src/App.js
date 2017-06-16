import React, { Component } from 'react';
import bucket from './res/buckets.jpg'
import './css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={bucket} className="App-logo" alt="logo" />
          <h2 className="header-title">رنگ حمدی</h2>
        </div>
        <p className="App-intro">
          رنگ و ابزار حمدی
        </p>
      </div>
    );
  }
}

export default App;
