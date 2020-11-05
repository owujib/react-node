import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProduct } from '../actions/productActions';
import CardList from './CardList';

class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    console.log(this.props);
    const { products } = this.props.products;
    const productList = products.map((product, id) => {
      return (
        <div key={id} className="col-md-4 mb-2 mt-2">
          <CardList {...product} />
        </div>
      );
    });
    return (
      <div>
        <h4 className="text-center text-secondary m-3 p-2">Product</h4>
        <div className="container-fluid">
          <div className="row">{productList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProduct })(Product);
