import React, { Component } from 'react';
import PropTypes from 'prop-types'


class SideNav extends Component {

  constructor(props) {
    super(props);
    this.collapsible = this.collapsible.bind(this)
    this.closeCollapsible = this.closeCollapsible.bind(this)
    this.openCollapsible = this.openCollapsible.bind(this)
    this.M = props.M

    this.state = {
      instance: undefined,
      collapsibleIsOpen: false,
    }
  }
  collapsible() {
    const el = document.querySelector('.collapsible')
    const options = {
      accordion: true
    }
    const col = new this.M.Collapsible(el, options)
    return col
  }
  componentDidMount() {
    this.setState({instance: this.collapsible()})
  }
  toggleCollapsible() {

    (this.state.collapsibleIsOpen)? this.closeCollapsible() : this.openCollapsible();
  }
  openCollapsible(){

    this.state.instance.open(2)
    this.setState({collapsibleIsOpen: true})
  }
  closeCollapsible() {

    this.state.instance.close(2)
    this.setState({collapsibleIsOpen: false})
  }
  render() {

    return (
      <ul id="slide-out" className="sidenav" style={menu}>
        <li className='theme-bg-color no-padding' style={menuClose}>
          <a className="sidenav-close"
             style={menuClose}>
            <i className="material-icons" style={closeI} >close</i>Close Menu
          </a>
        </li>

        <li className="no-padding"><a href="#!">Home</a></li>

        <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li>
            <a style={collapsibleLink}
                className="collapsible-header"
                onClick={this.toggleCollapsible.bind(this)}>About Us<i style={arrowI} className="material-icons right ">arrow_drop_down</i></a>
            <div className="collapsible-body">
              <ul>
                <li><a href="#!">Our Office</a></li>
                <li><a href="#!">Our Team</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

        <li className="no-padding"><a href="#!">Blog</a></li>
        <li className="no-padding"><a href="#!">Contact</a></li>
      </ul>
    );
  }


}
const menu = {

  textAlign: 'left',
}
const collapsibleLink = {

  paddingRight: '0',
}
const menuClose = {
  height: '50px',
  color: 'white',
}
const closeI = {
  marginRight: '10px',
  color: 'white'
}
const arrowI = {
  margin: '0',
  width: '40px',
  backgroundColor: '#eee'

}

export default SideNav;
