import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    /* global google */
    this.state = {
      email: '',
      userName: '',
      message: '',
      formErrors: { email: '', userName: '', message: '' },
      emailValid: false,
      userNameValid: false,
      messageValid: false,
      formValid: false,
      offlineMap: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Contact";
  }

  componentDidMount() {
    const OFFICE = { lat: 40.767500, lng: -73.981350 };
    try {
      this.map = new google.maps.Map(this.refs.map, {
        center: OFFICE,
        zoom: 16,
        scrollwheel: false
      });
      this.marker = new google.maps.Marker({
        position: OFFICE,
        map: this.map
      });
    } catch (error) {
      this.setState({ offlineMap: true });
    }
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
    let messageValid = this.state.messageValid;

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
      case "message":
        messageValid = value.length > 0;
        fieldValidationErrors.message = !messageValid;
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      userNameValid: userNameValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.userNameValid && this.state.messageValid });
  }

  handleSubmit() {
    if (this.state.formValid === false) {
      alert("Some fields are invalid. Please check your data and submit the form again.");
      return;
    }
    alert("Thank you! We will consider your message and reply to you as soon as possible.");
  }

  render() {
    const mapStyle = {
      flex: 1,
      height: 400
    };
    let mapBox = null;
    if (this.state.offlineMap) {
      mapBox = <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/map.jpg"} alt="map" />
    } else {
      mapBox = <div ref="map" style={mapStyle}></div>
    }
    return (
      <div>
        {mapBox}
        <div className="row">
          <div className="col-4 contact-wrapper">
            <h2 className="contact-title">Contact Info</h2>
            <table className="address-table">
              <tbody>
                <tr>
                  <td>Address:</td>
                  <td>101 The Amazing Road, Privier Building, Manhattan, 400105, United States</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td><a href="tel:+38006244578">+3-800-624-4578</a></td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><a href="mailto:someone@example.com">someone@example.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-8 contact-form-wrapper">
            <h2 className="contact-title">Get in Touch with Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem.
                            Vestibulum ornare eleifendit massa, nec tempor odio.</p>
            <form className="form-wrapper contact-form" onSubmit={this.handleSubmit}>
              <label htmlFor="contact-name">Your Name <span className="required-asterisk">Required</span></label>
              <input type="text"
                id="contact-name"
                name="userName"
                className={this.state.formErrors.userName ? "error" : null}
                value={this.state.userName}
                onChange={this.handleUserInput} />

              <label htmlFor="contact-email">Your Email <span className="required-asterisk">Required</span></label>
              <input type="email"
                id="contact-email"
                name="email"
                className={this.state.formErrors.email ? "error" : null}
                value={this.state.email}
                onChange={this.handleUserInput} />

              <label htmlFor="contact-message">Your Message <span className="required-asterisk">Required</span></label>
              <textarea id="contact-message"
                name="message"
                className={this.state.formErrors.message ? "error" : null}
                value={this.state.message}
                onChange={this.handleUserInput}></textarea>

              <button type="submit" className="submit-btn" disabled={!this.state.formValid}>Send message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;