import React, { Component } from 'react';
import { User } from '../../requests';
import './NewUserPage.css';

class NewUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const params = {
      user: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        email: formData.get('email'),
        bio: formData.get('bio'),
        password: formData.get('password'),
        password_confirmation: formData.get('passwordConfirmation'),
      },
    };
    User.create(params).then((data) => {
      if (data.status === 422) {
        this.setState((state) => {
          return {
            errors: data.errors,
          };
        });
      } else {
        this.props.history.push('/sign_in', 'hello');
      }
    });
  }

  // handleOnChange = (event) => {
  //   if (event.target.name === 'avatar') {
  //     this.setState({
  //       [event.target.name]: event.target.files[0],
  //     });
  //   }
  // };

  // uploadFile = (file, user) => {
  //   const upload = new DirectUpload(
  //     file,
  //     'http://localhost:3000//rails/active_storage/direct_uploads'
  //   );
  //   upload.create((error) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
  // };

  render() {
    return (
      <div className="NewUserPage">
        <div className="NewUserPage-box">
          <div className="NewUserPage-header">
            <h1 className="NewUserPage-title">New User</h1>
          </div>
          {Object.keys(this.state.errors).length > 0 ? (
            <div>Failed to create User</div>
          ) : null}
          <form className="NewUserPage-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input type="text" id="first_name" name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input type="text" id="last_name" name="lastName" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <br />
              <textarea
                className="NewUserPage-bio"
                name="bio"
                id="bio"
              ></textarea>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <br />
              <input
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
              />
            </div>
            <br />
            <input
              className="NewUserPage-btn"
              type="submit"
              value="Create User"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NewUserPage;
