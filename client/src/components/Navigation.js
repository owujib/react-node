import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../hoc/Auth';

class Navigation extends React.Component {
  render() {
    console.log(this.props);
    const {
      user: { user: user, history },
    } = this.props;
    console.log({ history });
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </Nav>
              {/* {this.props.user.role !== 'admin' ? ( */}

              {/* ) : ( */}
              <Nav>
                <Link className="nav-link" to="/add/product">
                  New Product
                </Link>
              </Nav>
              {/* )} */}
              {/* <Nav>
              <Link className="nav-link" to="/add/product">
                New Product
              </Link>
            </Nav> */}
            </Nav>
            <Nav>
              {!user.isLoggedIn ? (
                <>
                  {' '}
                  <Nav>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </Nav>
                  <Nav>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </Nav>
                </>
              ) : (
                <Nav>
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={(e) => {
                      localStorage.removeItem('user');
                      // this.props.history.push('/');
                      history.push('/');
                      // window.location = '/';
                    }}
                  >
                    LogOut
                  </Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Auth(Navigation));
