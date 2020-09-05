import React, { Component } from 'react';
import { Session } from '../../requests';
import './SignInPage.css';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.createSession = this.createSession.bind(this);
  }

  refreshNavBar() {}

  createSession(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    Session.create({
      email: formData.get('email'),
      password: formData.get('password'),
    }).then((data) => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: 'Wrong credentails' }],
        });
      } else {
        this.props.history.push('/');
        window.location.reload(false);
      }
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="SignInPage">
        <div className="SignInPage-box">
          <div className="SignInPage-header">
            <h1 className="SignInPage-title">Sign In</h1>
          </div>

          {errors.length > 0 ? (
            <div className="SignInPage-errors">
              {errors.map((err) => err.message).join(', ')}
            </div>
          ) : null}
          <form
            className="SignInPage-form"
            onSubmit={this.createSession}
            refresh="true"
          >
            <div className="SignInPage-field">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" name="email" id="email" />
            </div>
            <div className="SignInPage-field">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" id="password" />
            </div>
            <br />
            <input className="SignInPage-btn" type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignInPage;
