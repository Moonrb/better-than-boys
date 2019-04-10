import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';


class App extends Component {
  render() {
    return (
        <div>
        {this.props.children}
        </div>
    )
  }
}

export default App;
