import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from './components/ProductList';

import { connect } from 'react-redux'


class App extends Component {

  render() {
    return (
      <div className="container">
        <NavBar title="online-shopping" />
        <hr />
        <Router>
          <div>
            <CartBadge />
            <hr />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
            <hr />
            <div>{this.props.status.message}</div>
            <hr />
            <Route path="/" exact={true} component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path="/cart" component={ViewCart} />

          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return { status: state.status }
}

export default connect(mapStateToProps, null)(App);
