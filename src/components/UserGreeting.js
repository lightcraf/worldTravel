﻿import React from 'react';
import { Link } from 'react-router-dom';

class UserGreeting extends React.Component {
  render() {
    var isLoggedIn = this.props.isLoggedIn;
    var loginButton = null;

    if (isLoggedIn) {
      loginButton = <div className="welcome-user">Welcome<div className="aqua">{this.props.isLoggedIn}</div></div>;
    } else {
      loginButton = <Link to='/join' className="nav-link">Sign Up</Link>;
    }

    return (
      <li>
        {loginButton}
      </li>
    );
  }
}

export default UserGreeting;