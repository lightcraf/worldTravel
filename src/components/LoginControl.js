import React from 'react';
import { Link } from 'react-router-dom';
import CookieUtil from '../cookie';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    CookieUtil.unset("name");
    window.location.reload();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let loginButton = null;

    if (isLoggedIn) {
      loginButton = <a href="/" className="nav-link" onClick={this.handleLogoutClick}>Logout</a>;
    } else {
      loginButton = <Link to='/login' className="nav-link">Login</Link>;
    }
    
    return (
      <li>
        {loginButton}
      </li>
    );
  }
}

export default LoginControl;