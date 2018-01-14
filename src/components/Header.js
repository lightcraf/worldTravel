import React from 'react';
import { Link } from 'react-router-dom';
import CookieUtil from '../cookie';
import LoginControl from './LoginControl';
import UserGreeting from './UserGreeting';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.cookie = (CookieUtil.get("name") !== null) ? CookieUtil.get("name") : false;
    this.state = {
      cookie: this.cookie,
      showNav: true
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ showNav: !this.state.showNav });
  }

  render() {
    return (
      <header className="header">
        <nav className="top-nav">
          <h1 className="logo">
            <a href="/"><img src={process.env.PUBLIC_URL + "/images/globe.png"} alt="worldtravel" title="WorldTravel" /></a>
          </h1>
          <div className="top-menu-icon" onClick={this.toggleNav}></div>
          <ul className={this.state.showNav ? "top-nav-list" : null}>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li className="dropdown">
              <Link to="/tours" className="nav-link caret-nav" aria-haspopup="true">Tours</Link>
              <div className="dropdown-content" aria-label="submenu">
                <Link to="/request">Tour Request</Link>
                <a href="#special-offers">Special Offers</a>
                <a href="#destination-guides">Destination Guides</a>
                <a href="#popular-tours">Popular Tours</a>
              </div>
            </li>
            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <LoginControl isLoggedIn={this.state.cookie} />
            <UserGreeting isLoggedIn={this.state.cookie} />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;