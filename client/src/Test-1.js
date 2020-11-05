import React, { Component } from 'react';

import auth from './auth';
export class Tests extends Component {
  render() {
    return (
      <div>
        <h1>text 1</h1>
        <button
          onClick={() => {
            auth.login(() => {
              this.props.history.push('/');
            });
          }}
        >
          login
        </button>
      </div>
    );
  }
}

export default Tests;
