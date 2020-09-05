import React, { Component } from 'react';
import dawson from './dawson.jpg';
import percy from './percy.jpeg';
import tucker from './tucker.jpeg';
import './HomePage.css';
import NewUserPage from '../NewUserPage';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage-main">
        <div className="HomePage">
          <div className="HomePage-showcase">
            <div className="HomePage-header">
              <h1 className="HomePage-title">Welcome to The Dog Spot</h1>
            </div>
            <div className="HomePage-imgbox">
              <img src={dawson} alt="dog" className="HomePage-img" />
            </div>
            <div className="HomePage-imgbox">
              <img src={percy} alt="dog" className="HomePage-img" />
            </div>
            <div className="HomePage-imgbox">
              <img src={tucker} alt="dog" className="HomePage-img" />
            </div>
          </div>
        </div>
        <div className="HomePage-newuser">
          <div className="HomePage-header">
            <h1 className="HomePage-title">Sign Up Below</h1>
          </div>
          <NewUserPage />
        </div>
      </div>
    );
  }
}

export default HomePage;
