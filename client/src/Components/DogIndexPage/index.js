import React, { Component } from 'react';
import { Dog } from '../../requests';
import river from './river.jpg';
import './DogIndex.css';

class DogIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    Dog.index().then((dogs) => {
      this.setState((state) => {
        return {
          dogs,
          isLoading: false,
        };
      });
      console.log(dogs);
    });
  }

  render() {
    const { dogs } = this.state;

    return (
      <div className="DogIndex-main">
        <div className="DogIndex-header">
          <h1 className="DogIndex-maintitle">
            Your new best friend might be down below!
          </h1>
        </div>
        {dogs.map((dog) => (
          <div key={dog.id} className="DogIndex-card">
            <p className="DogIndex-title">{dog.name}</p>
            <div className="DogIndex-img-box">
              <a href={`/dogs/${dog.id}`} className="DogIndex-imgtag">
                <img className="DogIndex-img" src={river} alt="dog" />
              </a>
            </div>
            <p className="DogIndex-name">
              {dog.age} | {dog.sex}
            </p>
            <p>
              {dog.breed} | {dog.size}
            </p>
            <a href={`users/${dog.user.id}`} className="DogIndex-link">
              Owner: {dog.user.first_name} {dog.user.last_name}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default DogIndexPage;
