import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Session } from '../requests';
import HomePage from '../Components/HomePage';
import NavBar from '../Components/NavBar';
import SignInPage from '../Components/SignInPage';
import DogIndexPage from '../Components/DogIndexPage';
import DogShowPage from '../Components/DogShowPage';
import UserShowPage from '../Components/UserShowPage';
import NewDogPage from '../Components/NewDogPage';
import NewUserPage from '../Components/NewUserPage';
import EditDogPage from '../Components/EditDogPage';
import EditUserAccPage from '../Components/EditUserAccPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.getUser();
  }

  destroySession = (e) => {
    e.preventDefault();
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser() {
    Session.current().then((data) => {
      this.setState((state) => {
        return {
          currentUser: data,
        };
      });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar
          currentUser={this.state.currentUser}
          signOut={this.destroySession}
        />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/dogs" exact component={DogIndexPage} />
          <Route path="/dogs/new" exact component={NewDogPage} />
          <Route
            path="/dogs/:id"
            exact
            component={DogShowPage}
            currentUser={this.state.currentUser}
          />
          <Route path="/dogs/:id/edit" exact component={EditDogPage} />
          <Route path="/users/:id/edit" exact component={EditUserAccPage} />
          <Route path="/users/:id" exact component={UserShowPage} />
          {this.state.currentUser ? (
            <Route path="/user" exact component={UserShowPage} />
          ) : (
            <Route path="/user" exact component={NewUserPage} />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
