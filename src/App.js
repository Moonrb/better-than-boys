import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'; //antd-mobile的样式全局引入
import "react-id-swiper/src/styles/scss/swiper.scss"; // swiper的css样式


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
