import React, { Component } from 'react';
import EditDogForm from '../EditDogForm';
import { Dog } from '../../requests';

class EditDogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {},
    };
    this.editDog = this.editDog.bind(this);
    this.updateDogData = this.updateDogData.bind(this);
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

  editDog() {
    const params = {
      dog: {
        name: this.state.dog.name,
        bio: this.state.dog.bio,
        breed: this.state.dog.breed,
        age: this.state.dog.age,
        size: this.state.dog.size,
      },
    };
    Dog.update(this.props.match.params.id, params).then((dog) => {
      this.props.history.push(`/dogs/${dog.id}`);
    });
  }

  updateDogData(props) {
    this.setState((state) => {
      console.log(props);
      console.log(state);
      return {
        dog: {
          ...state.dog,
          ...props,
        },
      };
    });
  }

  render() {
    return (
      <main>
        <EditDogForm
          editDog={this.editDog}
          dog={this.state.dog}
          updateDogData={this.updateDogData}
        />
      </main>
    );
  }
}

export default EditDogPage;
