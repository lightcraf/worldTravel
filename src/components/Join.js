import React from 'react';
import CookieUtil from '../cookie';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      formErrors: { email: '', userName: '', password: '' },
      emailValid: false,
      userNameValid: false,
      passwordValid: false,
      formValid: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Sign Up";
  }

  handleUserInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let userNameValid = this.state.userNameValid;
    let passwordValid = this.state.passwordValid;

    const EMAIL_PATTERN = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    switch (fieldName) {
      case "email":
        emailValid = EMAIL_PATTERN.test(value);
        fieldValidationErrors.email = !emailValid;
        break;
      case "userName":
        userNameValid = value.length > 0;
        fieldValidationErrors.userName = !userNameValid;
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = !passwordValid;
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      userNameValid: userNameValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.userNameValid && this.state.passwordValid });
  }

  handleSubmit(event) {
    const dataUsers = JSON.parse(localStorage.getItem('usersLocalSt') || "[]");
    const formData = {};
    if (this.state.formValid === false) {
      event.preventDefault();
      return;
    } else {
      event.preventDefault();
      CookieUtil.set("name", this.state.userName, new Date("January 1, 2030"));
      formData.username = this.state.userName;
      formData.password = this.state.password;
      dataUsers.push(formData);
      localStorage.setItem('usersLocalSt', JSON.stringify(dataUsers));
      window.location.replace("/");
    }
  }

  render() {
    return (
      <div>
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label htmlFor="join-username">Name <span className="required-asterisk">Required</span></label>
          <input type="text"
            id="join-username"
            name="userName"
            className={this.state.formErrors.userName ? "error" : null}
            value={this.state.userName}
            onChange={this.handleUserInput} />

          <label htmlFor="join-email">Email <span className="required-asterisk">Required</span></label>
          <input type="email"
            id="join-email"
            name="email"
            className={this.state.formErrors.email ? "error" : null}
            value={this.state.email}
            onChange={this.handleUserInput} />

          <label htmlFor="join-password">Password <span className="required-asterisk">Required</span></label>
          <input type="password"
            id="join-password"
            name="password"
            className={this.state.formErrors.password ? "error" : null}
            value={this.state.password}
            onChange={this.handleUserInput} />
          <span>By creating an account you agree to our <a href="/join">Terms & Privacy</a>.</span>

          <button type="submit" className="submit-btn" disabled={!this.state.formValid}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Join;