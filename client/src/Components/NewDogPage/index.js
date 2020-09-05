import React, { Component } from 'react';
import NewDogForm from '../NewDogForm';
import { Dog, Trait, Activity } from '../../requests';

class NewDogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDogData: {
        name: '',
        bio: '',
        breed: '',
        age: '',
        size: '',
        newTraitData: {
          name: '',
        },
        newActivityData: {
          name: '',
        },
      },
    };
    this.createDog = this.createDog.bind(this);
    this.updateDogData = this.updateDogData.bind(this);
    this.createTrait = this.createTrait.bind(this);
    this.updateTraitData = this.updateTraitData.bind(this);
    this.createActivity = this.createActivity.bind(this);
    this.updateActivityData = this.updateActivityData.bind(this);
  }

  createDog() {
    const params = {
      dog: {
        name: this.state.newDogData.name,
        bio: this.state.newDogData.bio,
        breed: this.state.newDogData.breed,
        age: this.state.newDogData.age,
        size: this.state.newDogData.size,
        newTraitData: this.state.newDogData.newTraitData.name,
        newActivityData: this.state.newDogData.newActivityData.name,
      },
    };
    Dog.create(params).then((dog) => {
      this.createTrait(dog.id);
      this.createActivity(dog.id).then(() =>
        this.props.history.push(`/dogs/${dog.id}`)
      );
    });
  }

  updateDogData(props) {
    this.setState((state) => {
      console.log(props);
      console.log(state);
      return {
        newDogData: {
          ...state.newDogData,
          ...props,
        },
      };
    });
  }

  createTrait(id) {
    const traits = this.state.newDogData.newTraitData.name.split(',');
    return Promise.all(
      traits.map((trait) =>
        Trait.create(id, {
          trait: {
            name: trait.trim(),
          },
        })
      )
    );
  }

  updateTraitData(props) {
    this.setState((state) => {
      return {
        newDogData: {
          ...state.newDogData,
          ...props,
        },
      };
    });
  }

  createActivity(id) {
    const activities = this.state.newDogData.newActivityData.name.split(',');
    return Promise.all(
      activities.map((activity) =>
        Activity.create(id, {
          activity: {
            name: activity.trim(),
          },
        })
      )
    );
  }

  updateActivityData(props) {
    this.setState((state) => {
      return {
        newDogData: {
          ...state.newDogData,
          ...props,
        },
      };
    });
  }

  render() {
    return (
      <main>
        <NewDogForm
          createDog={this.createDog}
          newDogData={this.state.newDogData}
          updateDogData={this.updateDogData}
          updateTraitData={this.updateTraitData}
          updateActivityData={this.updateTraitData}
        />
      </main>
    );
  }
}

export default NewDogPage;
