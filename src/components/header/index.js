import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'HEXA',
      version: 'v0.1',
    };
  }

  render() {
    const state = this.state;
    return (
      <div className="header_container">
        <div className="title">
          <Link
            to={{
              pathname: '/',
            }}
          >
            {state.title}
          </Link>
          <p>v0.1</p>
        </div>
        
        <div className="header">
          <div className="logos">
            <a href="" target="_blank" rel="noopener noreferrer">
            
            </a>
            
          </div>
  
        </div>
      </div>
      
    );
  }
}


export default Header;
