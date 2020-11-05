import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import auth from '../auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      err: {},
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };

    auth.login((a) => {
      console.log(a);
      axios
        .post('http://localhost:4000/api/user/login', data)
        .then((response) => {
          console.log(response);
          localStorage.setItem('auth_token', response.data.message.token);
          this.props.history.push('/');

          // this.setState({
          //   redirect: true,
          // });
        })
        .catch((err) => {
          this.setState({
            err: err.response,
          });
        });
    });
    // axios
    //   .post('http://localhost:4000/api/user/login', data)
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.setItem('auth_token', response.data.message.token);
    //     this.setState({
    //       redirect: true,
    //     });
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       err: err.response,
    //     });
    //   });
  }
  render() {
    return (
      <div className="container  p-3">
        <h3 className="text-center m-3"> Login 👤</h3>
        <Form className="container">
          <FormGroup>
            <FormControl
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
          </FormGroup>
          <Button
            type="button"
            onClick={this.handleSubmit}
            className="btn btn-block"
          >
            Login
          </Button>
          {/* {this.state.redirect && this.props.history.push('/')} */}

          {/* {this.props.history.push('/')} */}
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
