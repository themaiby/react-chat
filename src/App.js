import React, { Component } from 'react';
import Layout from './Components/Layout';

const body = ("Im body");

class App extends Component {
  render() {
    return (
        <Layout body={body} />
    );
  }
}
export default App;
