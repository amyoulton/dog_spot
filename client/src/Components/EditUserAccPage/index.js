import React, { Component } from 'react';
import EditUserForm from '../EditUserForm';
import { User } from '../../requests';

class EditUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.editUser = this.editUser.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
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

  editUser() {
    const params = {
      user: {
        first_name: this.state.user.first_name,
        last_name: this.state.user.last_name,
        bio: this.state.user.bio,
      },
    };
    User.update(this.props.match.params.id, params).then((user) => {
      this.props.history.push(`/users/${this.state.user.id}`);
    });
  }

  updateUserData(props) {
    this.setState((state) => {
      return {
        user: {
          ...state.user,
          ...props,
        },
      };
    });
  }

  render() {
    return (
      <main>
        <EditUserForm
          editUser={this.editUser}
          user={this.state.user}
          updateUserData={this.updateUserData}
        />
      </main>
    );
  }
}

export default EditUserPage;
