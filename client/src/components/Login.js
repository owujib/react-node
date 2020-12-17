import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';
import { login } from '../actions/userActions';
// import axios from 'axios';
// import auth from '../auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      err: null,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.err !== state.err) {
      return {
        err: props.err,
      };
    }
    return null;
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
    this.props.login(data);
    console.log(this.props);
    this.setState({
      redirect: true,
    });
  }

  render() {
    return (
      <div className="container  p-3">
        {this.props.err ? (
          <p className="alert alert-danger">{this.props.err}</p>
        ) : (
          ''
        )}
        <h3 className="text-center m-3"> Login 👤</h3>
        <h1>{this.state.name} name</h1>
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
          {this.props.redirect && <Redirect to="product" />}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  err: state.user.err,
  redirect: state.user.redirect,
});

export default connect(mapStateToProps, { login })(withRouter(Login));
