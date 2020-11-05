import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  state = {
    product: {},
    err: {},
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get('http://localhost:4000/api/product/' + id)
      .then((response) => this.setState({ product: response.data.message }))
      .catch((err) => this.setState({ err }));
  }

  render() {
    const { product } = this.state;

    return (
      <div className="m-2">
        <h4 className="text-center">Product</h4>
        <hr />
        <div className="container">
          <div>
            <h4>{product.name}</h4>
            <img src={'http://localhost:4000' + product.productImg} />
            <p>{product.description}</p>
            <span>
              <strong>created at: </strong>
              {product.createdAt}
            </span>
          </div>
          <Link className="btn btn-warning" to={`/${product._id}/add/image`}>
            ➕add image
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductList;
