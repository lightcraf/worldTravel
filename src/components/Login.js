import React from 'react';
import CookieUtil from '../cookie';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      loginError: false
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Login";
  }

  handleUserName(event) {
    this.setState({ userName: event.target.value });
  }

  handlePassword(event) {
    this.setState({ userPassword: event.target.value });
  }

  handleSubmit(event) {
    const dataUsers = JSON.parse(localStorage.getItem('usersLocalSt'));
    for (let i = 0, len = dataUsers.length; i < len; i++) {
      if ((dataUsers[i].username === this.state.userName) && (dataUsers[i].password === this.state.userPassword)) {
        CookieUtil.set("name", this.state.userName, new Date("January 1, 2030"));
        window.location.replace("/");
      } else {
        this.setState({ loginError: true });
        event.preventDefault();
      }
    }
  }

  render() {
    let errorMessage = null;
    if (this.state.loginError) {
      errorMessage = <p>The login or password is incorrect.</p>;
    }
    return (
      <div>
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label htmlFor="login-username">Username</label>
          <input type="text"
            id="login-username"
            name="username"
            value={this.state.userName}
            onChange={this.handleUserName} />

          <label htmlFor="login-password">Password <a href="/login" className="label-link">Forgot password?</a></label>
          <input type="password"
            id="login-password"
            name="password"
            value={this.state.userPassword}
            onChange={this.handlePassword} />

            {errorMessage}

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;