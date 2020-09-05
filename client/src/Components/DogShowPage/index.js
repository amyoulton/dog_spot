import React, { Component } from 'react';
import { Dog } from '../../requests';
import { DogProfile } from '../DogProfile';
import NewReviewPage from '../NewReviewPage';

class DogShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {},
      isLoading: true,
    };
    this.updateDog = this.updateDog.bind(this);
    this.destroyDog = this.destroyDog.bind(this);
  }

  updateDog() {
    Dog.get(this.props.match.params.id).then((dog) => {
      this.setState((state) => {
        return {
          dog,
          isLoading: false,
        };
      });
    });
  }

  destroyDog() {
    Dog.destroy(this.state.dog.id).then((result) => {
      this.props.history.push(`/dogs`);
    });
  }

  componentDidMount() {
    Dog.get(this.props.match.params.id).then((dog) => {
      this.setState((state) => {
        return {
          dog,
          isLoading: false,
        };
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <DogProfile
            id={this.state.dog.id}
            name={this.state.dog.name}
            bio={this.state.dog.bio}
            age={this.state.dog.age}
            breed={this.state.dog.breed}
            size={this.state.dog.size}
            traits={this.state.dog.traits}
            user={this.state.dog.user}
            activities={this.state.dog.activities}
            image={this.state.dog.image}
            reviews={this.state.dog.reviews}
            destroyDog={this.destroyDog}
          />
          <NewReviewPage
            dogId={this.state.dog.id}
            reviews={this.state.dog.reviews}
            history={this.props.history}
            updateDog={this.updateDog}
          />
        </div>
      </div>
    );
  }
}

export default DogShowPage;
