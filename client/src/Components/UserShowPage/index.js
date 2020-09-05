import React, { Component } from 'react';
import { User } from '../../requests';
import { UserProfile } from '../UserProfile';

class UserShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    User.get(this.props.match.params.id).then((user) => {
      this.setState((state) => {
        return {
          user,
          isLoading: false,
        };
      });
    });
  }

  render() {
    return (
      <div>
        <UserProfile
          id={this.state.user.id}
          first_name={this.state.user.first_name}
          last_name={this.state.user.last_name}
          bio={this.state.user.bio}
          email={this.state.user.email}
        />
      </div>
    );
  }
}

export default UserShowPage;
