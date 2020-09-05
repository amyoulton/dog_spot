import React from 'react';
import './EditDogForm.css';

function EditDogForm(props) {
  const { dog, updateDogData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.editDog();
  }

  function handleDogInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    console.log(name, value);
    updateDogData({ [name]: value });
  }

  return (
    <div className="EditDogForm">
      <div className="EditDogForm-box">
        <div className="EditDogForm-header">
          <h1 className="EditDogForm-title">Edit Dog</h1>
        </div>
        <form className="EditDogForm-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <br />
            <input
              name="name"
              id="name"
              value={dog.name}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="bio">Bio</label>
            <br />
            <textarea
              name="bio"
              id="bio"
              value={dog.bio}
              onChange={handleDogInput}
              className="NewDogForm-bio"
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="breed">Breed</label>
            <br />
            <input
              name="breed"
              id="breed"
              value={dog.breed}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="age">Age</label>
            <br />
            <input
              name="age"
              id="age"
              value={dog.age}
              onChange={handleDogInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="size">Size</label>
            <br />
            <input
              name="size"
              id="size"
              value={dog.size}
              onChange={handleDogInput}
            ></input>
          </div>
          <br />
          <input className="EditDogForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default EditDogForm;
