// import React from "react";
import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import "./Header.css";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class Header extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {

    return (
      <StickyHeader
        header={
          <div className="Header_root">
            {/* Logo */}
            <img
                src={process.env.PUBLIC_URL + '/tourbo_log.png'} 
                className="logo Header_title"
                alt="logo"
              />
          </div>
        }
      >
      </StickyHeader>
    );
  }
}

  
export default Header;
