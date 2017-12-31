import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Header extends Component {

  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(instance) {
    instance.open();
  }
  render() {

    return (
        <header className="App-header">
          <nav className="transparent z-depth-0 Navbar" style={navStyles}>
            <div className="nav-wrapper">
              {/* <a className="brand-logo">PART 1</a> */}

              <a onClick={this.openMenu.bind(this, this.props.sideNav_instance)} className="btn-floating white z-depth-0" ><i className="material-icons theme-text-color" style={buttonStyles}>menu</i></a>

            </div>
          </nav>
        </header>
    );
  }


}

const buttonStyles = {
  lineHeight: '40px',
  height: '40px'
}

const navStyles = {
  // border: '1px solid #333',
  height: '80px',
  paddingTop: '10px',
  paddingRight: '20px'
}

Header.PropTypes = {
  sideNav_instance: PropTypes.object.isRequired

}

export default Header;
