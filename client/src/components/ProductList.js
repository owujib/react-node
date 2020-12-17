import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class ProductList extends Component {
  state = {
    product: {},
    err: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

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
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get('http://localhost:4000/api/product/' + id)
      .then((response) => this.setState({ product: response.data.message }))
      .catch((err) => this.setState({ err }));
  }
  // /:id/update-product
  render() {
    const { product } = this.state;

    return (
      <div className="  container">
        <h4 className="text-center">Product</h4>
        <hr />
        <div className="container" style={{ padding: '100px' }}>
          <div className="card my-4">
            <img
              src={'http://localhost:4000' + product.productImg}
              className="card-img"
            />
            <div className="card-body">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <span>
                <strong>created at: </strong>
                {product.createdAt}
              </span>
            </div>
          </div>
          <Link
            className="btn btn-outline-warning"
            to={`/${product._id}/add/image`}
          >
            ➕add image
          </Link>
          <Link
            className="btn btn-outline-secondary mx-3"
            to={`/${product._id}/edit/product`}
          >
            Edit product
          </Link>
        </div>
        <h4 className="text-center text-secondary">Edit {product.name}</h4>
        <Form
          className="container p-2"
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

export default ProductList;
