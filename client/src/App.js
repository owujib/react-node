import React from 'react';
// import proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import AddProductImage from './components/AddProductImage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Auth from './hoc/Auth';

class App extends React.Component {
  state = {
    products: [],
    err: {},
  };

  render() {
    return (
      <div>
        <Navigation />

        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductList} />

        <Route
          path="/product"
          exact
          render={(routerProps) => (
            <Product {...routerProps} products={this.state.products} />
          )}
        />
        <Route path="/add/product" component={Auth(AddProduct, true, true)} />
        <Route path="/:id/add/image" component={AddProductImage} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register">
          <Register />
        </Route>
      </div>
    );
  }
}

export default App;
