import React from 'react';
import './EditUserForm.css';

function EditUserForm(props) {
  const { user, updateUserData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.editUser();
  }

  function handleUserInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    updateUserData({ [name]: value });
  }

  //   function handleImageChange(e) {
  //     if (e.target.files[0]) this.setState({ newPhoto: e.target.files[0] });
  //   }

  //   function uploadPhoto() {
  //     const formData = new FormData();
  //     formData.append('file', this.state.newPhoto);

  //     // configure your fetch url appropriately
  //     fetch(`rails/photo/${user.id}`, {
  //       method: 'PATCH',
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // do something with the returned data
  //       });
  //   }

  return (
    <div className="EditUserForm">
      <div className="EditUserForm-box">
        <div className="EditUserForm-header">
          <h1 className="EditUserForm-title">Edit User Information</h1>
        </div>
        <form className="EditUserForm-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="first_name">First Name</label>
            <br />
            <input
              name="first_name"
              id="first_name"
              value={user.first_name}
              onChange={handleUserInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="last_name">Last Name</label>
            <br />
            <input
              name="last_name"
              id="last_name"
              value={user.last_name}
              onChange={handleUserInput}
            ></input>
          </div>
          <div className="field">
            <label htmlFor="bio">Bio</label>
            <br />
            <textarea
              className="EditUserForm-bio"
              name="bio"
              id="bio"
              value={user.bio}
              onChange={handleUserInput}
            ></textarea>
          </div>
          <br />
          <input className="EditUserForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default EditUserForm;
