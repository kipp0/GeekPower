import React, { Component } from 'react';
import M from 'materialize-css'

import './App.css';
import Header from './Header';
import SideNav from './SideNav';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideNav_instance: undefined,
    }
    this.init_side_bar = this.init_side_bar.bind(this)
  }

  init_side_bar() {

    const el = document.querySelector('.sidenav');

    const options = {
      edge: 'right'
    }

    const instance = new M.Sidenav(el, options)

    return instance
  }
  componentDidMount() {
    this.setState({
      sideNav_instance: this.init_side_bar()
    })
  }

  render() {

    return (
      <div className="App">
        <Header sideNav_instance={this.state.sideNav_instance} />
        <SideNav M={M} sideNav_instance={this.state.sideNav_instance} />
      </div>
    );
  }

}



export default App;
