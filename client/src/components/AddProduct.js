import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

import { createProduct } from '../actions/productActions';

class AddProduct extends Component {
  state = {
    name: '',
    description: '',
    err: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  static getDerivedStateFromProps(state, props) {
    if (props.err !== state.err) {
      return {
        err: state.err.message,
      };
    }
    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      description: this.state.description,
    };
    this.props.createProduct(data);
    this.setState({
      name: '',
      description: '',
    });
  };
  render() {
    return (
      <div className="container ">
        <h4>Post form</h4>
        {this.state.err ? (
          <p className="alert alert-danger">{this.state.err}</p>
        ) : (
          ''
        )}
        <Form
          onSubmit={this.handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <FormGroup>
            <FormControl
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter a product name"
            />
          </FormGroup>
          <FormGroup>
            <FormControl type="file" />
          </FormGroup>

          <FormGroup>
            <textarea
              className="form-control"
              id="description"
              value={this.state.description}
              placeholder="enter a product description"
              onChange={this.handleChange}
              rows="10"
            ></textarea>
          </FormGroup>
          <Button type="submit">create post</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  err: state.products.err,
});

export default connect(mapStateToProps, { createProduct })(AddProduct);

// handleSubmit = (e) => {
//   e.preventDefault();
//   let data = {
//     name: this.state.name,
//     description: this.state.description,
//   };
//   console.log(this.state);
//   axios
//     .post('http://localhost:4000/api/product/create-product', data)
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));

//   this.setState({
//     name: '',
//     description: '',
//   });
// };
