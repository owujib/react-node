import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

export class Profile extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/user/profile', {
        headers: { auth_token: `${localStorage.getItem('auth_token')}` },
      })
      .then((response) => this.setState({ user: response.data }))
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <h4>user profile</h4>
          <hr />
          <img src="..." alt="profile image" />
        </Container>
      </div>
    );
  }
}

export default Profile;
