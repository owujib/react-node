import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      password: '',
      err: {},
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
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('http://localhost:4000/api/user/register', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        // console.log('err response', err.response.data.message);
        this.setState({
          err: err.response,
        });
      });
  }
  render() {
    console.log(this.state.err);
    return (
      <div className="container  p-3">
        <h3 className="text-center m-3"> Register 👤</h3>
        <Form className="container" >
          <FormGroup>
            <FormControl
              name="fullname"
              type="text"
              onChange={this.handleChange}
              placeholder="fullname"
            />
          </FormGroup>
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
            Register
          </Button>
          {this.state.err === true ? (
            <p>{this.state.err.data}</p>
          ) : (
            <p>{this.state.err.data}</p>
          )}

          {/* {this.props.history.push('/')} */}
        </Form>
      </div>
    );
  }
}

export default withRouter(Register);
