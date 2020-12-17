import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import AddProductImage from './components/AddProductImage';
import UpdateProduct from './components/UpdateProduct';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Auth from './hoc/Auth';

import { getProfile } from './actions/userActions';

class App extends React.Component {
  state = {
    user: {},
    err: {},
  };

  // componentDidMount() {
  //   this.props.getProfile();
  // }

  render() {
    return (
      <div>
        {/* <Navigation isLoggedIn={user.isLoggedIn} user={user} /> */}
        <Navigation />
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/product/:id" component={ProductList} />

        <Route
          path="/product"
          exact
          render={(routerProps) => (
            <Product {...routerProps} products={this.state.products} />
          )}
        />
        <Route path="/add/product" component={Auth(AddProduct, false, true)} />
        <Route
          path="/:id/add/image"
          component={Auth(AddProductImage, false, true)}
        />
        <Route
          path="/:id/edit/product"
          component={Auth(UpdateProduct, false, true)}
        />
        {/* <Route path="/:id/add/image" component={AddProductImage} /> */}
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register">
          <Register />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { getProfile })(App);
