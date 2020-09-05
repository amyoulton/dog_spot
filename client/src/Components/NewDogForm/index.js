import React from 'react';
import './NewDogForm.css';

function NewDogForm(props) {
  const {
    newDogData,
    updateDogData,
    updateTraitData,
    updateActivityData,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.createDog();
  }

  function handleDogInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    console.log(name, value);

    if (name === 'trait') {
      updateTraitData({ newTraitData: { name: value } });
    } else updateDogData({ [name]: value });

    if (name === 'activity') {
      updateActivityData({ newActivityData: { name: value } });
    } else updateDogData({ [name]: value });
  }

  return (
    <div className="NewDogForm">
      <div className="NewDogForm-box">
        <div className="NewDogForm-header">
          <h1 className="NewDogForm-title">New Dog Information</h1>
        </div>
        <form className="NewDogForm-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <br />
            <input
              name="name"
              id="name"
              value={newDogData.name}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="bio">Bio</label>
            <br />
            <textarea
              className="NewDogForm-bio"
              name="bio"
              id="bio"
              value={newDogData.bio}
              onChange={handleDogInput}
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="breed">Breed</label>
            <br />
            <input
              name="breed"
              id="breed"
              value={newDogData.breed}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="age">Age</label>
            <br />
            <input
              name="age"
              id="age"
              value={newDogData.age}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="size">Size</label>
            <br />
            <input
              name="size"
              id="size"
              value={newDogData.size}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="trait">Trait</label>
            <br />
            <input
              name="trait"
              id="trait"
              value={newDogData.newTraitData.name}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="activity">Activity</label>
            <br />
            <input
              name="activity"
              id="activity"
              value={newDogData.newActivityData.name}
              onChange={handleDogInput}
            ></input>
          </div>
          <br />
          <input className="NewDogForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewDogForm;
