import React from 'react';

class RequestForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      userName: '',
      formErrors: { email: '', userName: '' },
      emailValid: false,
      userNameValid: false,
      formValid: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Tour Request Form";
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
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      userNameValid: userNameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.userNameValid });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.formValid === false) {
      alert("Some fields are invalid. Please check your data and submit the form again.");
      return;
    }
    alert("Thank you! Our manager will contact you to discuss all the details.");
    window.location.assign("/");
  }

  render() {
    return (
      <div className="request-pg-wrapper">
        <h2>Tour Request Form</h2>
        <form className="form-wrapper tour-request-from" onSubmit={this.handleSubmit}>
          <label htmlFor="request-name">Name <span className="required-asterisk">Required</span></label>
          <input type="text"
            id="request-name"
            name="userName"
            className={this.state.formErrors.userName ? "error" : null}
            value={this.state.userName}
            onChange={this.handleUserInput} />

          <label htmlFor="request-email">Email <span className="required-asterisk">Required</span></label>
          <input type="email"
            id="request-email"
            name="email"
            className={this.state.formErrors.email ? "error" : null}
            value={this.state.email}
            onChange={this.handleUserInput} />

          <label htmlFor="request-phone">Phone</label>
          <input type="text" id="request-phone" />

          <label htmlFor="request-country">Country</label>
          <select id="request-country">
            <option value="any">any</option>
            <option value="denmark">Denmark</option>
            <option value="england">England</option>
            <option value="estonia">Estonia</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="italy">Italy</option>
            <option value="netherlands">Netherlands</option>
            <option value="norway">Norway</option>
            <option value="poland">Poland</option>
            <option value="portugal">Portugal</option>
            <option value="spain">Spain</option>
            <option value="thailand">Thailand</option>
          </select>

          <label htmlFor="request-hotel">Hotel category</label>
          <select id="request-hotel">
            <option value="any">any</option>
            <option value="5">5*</option>
            <option value="4">4*</option>
            <option value="3">3*</option>
            <option value="2">2*</option>
            <option value="guesthouse">Guesthouse</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="request-start-date">Preferred tour date</label>
          <input type="date" id="request-start-date" />

          <label htmlFor="request-number-days">Number of days</label>
          <input type="text" id="request-number-days" />

          <label htmlFor="request-adults">Number of adults</label>
          <input type="text" id="request-adults" />

          <label htmlFor="request-children">Number of children</label>
          <input type="text" id="request-children" />

          <label htmlFor="request-board-type">Hotel Board Types</label>
          <select id="request-board-type">
            <option value="al">AL (All Inclusive)</option>
            <option value="bb">BB (Breakfast)</option>
            <option value="hb">HB (Breakfast and Dinner)</option>
            <option value="fb">FB (Beakfast, Lunch and Dinner)</option>
            <option value="ro">RO (Room only)</option>
          </select>

          <p>Rooms</p>
          <input type="checkbox" id="request-sngl" value="sngl" />
          <label htmlFor="request-sngl">SNGL</label><br />

          <input type="checkbox" id="request-dbl" value="dbl" />
          <label htmlFor="request-dbl">DBL</label><br />

          <input type="checkbox" id="request-dbl-chld" value="dbl-chld" />
          <label htmlFor="request-dbl-chld">DBL + CHLD</label><br />

          <input type="checkbox" id="request-dbl-2chld" value="dbl-2chld" />
          <label htmlFor="request-dbl-2chld">DBL + 2CHLD</label><br />

          <input type="checkbox" id="request-trpl" value="trpl" />
          <label htmlFor="request-trpl">TRPL</label><br />

          <input type="checkbox" id="request-trpl-chld" value="trpl-chld" />
          <label htmlFor="request-trpl-chld">TRPL + CHLD</label><br />

          <label htmlFor="request-budget">Estimated budget (for the total number of people)</label>
          <input type="text" id="request-budget" />

          <label htmlFor="request-more">Additional wishes</label>
          <textarea id="request-more" maxLength="1000">
          </textarea>

          <button type="submit" className="submit-btn" disabled={!this.state.formValid}>Request tour</button>
        </form>
      </div>
    );
  }
}

export default RequestForm;