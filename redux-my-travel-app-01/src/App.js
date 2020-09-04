import React, { Component } from 'react'
import TravelApp from './Component/travels/TravelApp';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.css';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <TravelApp />
        </BrowserRouter>



      </div>
    );
  }
}

export default App;
