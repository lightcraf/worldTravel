import React from 'react';

class PurchaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.tour = this.props.tour;
    this.state = {
      adults: 0,
      children: 0,
      hotelPrice: this.tour.hotels[0].price,
      boardType: 0,
      sngl: 0,
      dbl: 0,
      dblChld: 0,
      dbl2chld: 0,
      trpl: 0,
      trplChld: 0,
      snglRoomsCount: 1,
      dblRoomsCount: 1,
      dblChldRoomsCount: 1,
      dbl2chldRoomsCount: 1,
      trplRoomsCount: 1,
      trplChldRoomsCount: 1,
      isChecked1: true,
      isChecked2: true,
      isChecked3: true,
      isChecked4: true,
      isChecked5: true,
      isChecked6: true,
      email: '',
      userName: '',
      phone: '',
      formErrors: { email: '', userName: '', phone: '' },
      emailValid: false,
      userNameValid: false,
      phoneValid: false,
      formValid: false
    };

    this.handleHotel = this.handleHotel.bind(this);
    this.handleBoardType = this.handleBoardType.bind(this);
    this.handleAdults = this.handleAdults.bind(this);
    this.handleChildren = this.handleChildren.bind(this);
    this.handleRooms = this.handleRooms.bind(this);
    this.handleRoomsCount = this.handleRoomsCount.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleAdults(event) {
    var target = event.target;
    if (target.value > 10 || target.value < 0) {
      return;
    }
    this.setState({ adults: target.value });
  }

  handleChildren(event) {
    var target = event.target;
    if (target.value > 10 || target.value < 0) {
      return;
    }
    this.setState({ children: target.value });
  }

  handleHotel(event) {
    this.setState({ hotelPrice: event.target.value });
  }

  handleBoardType(event) {
    this.setState({ boardType: event.target.value });
  }

  handleRooms(n, event) {
    var target = event.target;
    this.handleRoomsCheck(n);

    if (target.checked) {
      this.setState({ [target.name]: target.value });
    } else {
      this.setState({ [target.name]: 0 });
    }
  }

  handleRoomsCheck(n) {
    switch (n) {
      case 1:
        this.setState({ isChecked1: !this.state.isChecked1 });
        break;
      case 2:
        this.setState({ isChecked2: !this.state.isChecked2 });
        break;
      case 3:
        this.setState({ isChecked3: !this.state.isChecked3 });
        break;
      case 4:
        this.setState({ isChecked4: !this.state.isChecked4 });
        break;
      case 5:
        this.setState({ isChecked5: !this.state.isChecked5 });
        break;
      case 6:
        this.setState({ isChecked6: !this.state.isChecked6 });
        break;
      default: break;
    }
  }

  handleRoomsCount(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUserInput(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    var fieldValidationErrors = this.state.formErrors;
    var emailValid = this.state.emailValid;
    var userNameValid = this.state.userNameValid;
    var phoneValid = this.state.phoneValid;

    var emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    var phonePattern = /^\(?(\d{3})\)?[\s\-_]?(\d{3})[\s\-_]?(\d{2})[\s\-_]?(\d{2})[\s\-_]?$/;

    switch (fieldName) {
      case "email":
        emailValid = emailPattern.test(value);
        fieldValidationErrors.email = !emailValid;
        break;
      case "userName":
        userNameValid = value.length > 0;
        fieldValidationErrors.userName = !userNameValid;
        break;
      case "phone":
        phoneValid = phonePattern.test(value);
        fieldValidationErrors.phone = !phoneValid;
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      userNameValid: userNameValid,
      phoneValid: phoneValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.userNameValid && this.state.phoneValid });
  }

  handleSubmit(event) {
    if (this.state.adults === 0 && this.state.children === 0) {
      event.preventDefault();
      alert("The number of adults or children can't be less than one");
      return;
    }
    if (this.state.formValid === false) {
      event.preventDefault();
      return;
    }
    alert("Thank you! Our manager will contact you to discuss all the details.");
  }

  render() {
    var optionTemplate = this.tour.hotels.map(item => (
      <option key={item.id} value={item.price}>{item.hotelName}</option>
    ));

    const totalPrice = this.tour.price * Number(this.state.adults).toFixed(0) +
      this.tour.price * Number(this.state.children).toFixed(0) * 0.8 +
      Number(this.state.hotelPrice) +
      Number(this.state.boardType) * Number(this.state.adults).toFixed(0) +
      Number(this.state.boardType) * Number(this.state.children).toFixed(0) +
      this.state.sngl * this.state.snglRoomsCount +
      this.state.dbl * this.state.dblRoomsCount +
      this.state.dblChld * this.state.dblChldRoomsCount +
      this.state.dbl2chld * this.state.dbl2chldRoomsCount +
      this.state.trpl * this.state.trplRoomsCount +
      this.state.trplChld * this.state.trplChldRoomsCount;

    return (
      <form className="form-wrapper purchase-form" onSubmit={this.handleSubmit}>
        <label htmlFor="book-name">Name <span className="required-asterisk">Required</span></label>
        <input type="text"
          id="book-name"
          name="userName"
          className={this.state.formErrors.userName ? "error" : null}
          value={this.state.userName}
          onChange={this.handleUserInput} />

        <label htmlFor="book-email">Email <span className="required-asterisk">Required</span></label>
        <input type="email"
          id="book-email"
          name="email"
          className={this.state.formErrors.email ? "error" : null}
          value={this.state.email}
          onChange={this.handleUserInput} />

        <label htmlFor="book-phone">Phone <span className="required-asterisk">Required</span></label>
        <input type="text"
          id="book-phone"
          name="phone"
          className={this.state.formErrors.phone ? "error" : null}
          value={this.state.phone}
          onChange={this.handleUserInput} />

        <div className="row">
          <div className="col-6 purchase-form-adults-number">
            <label htmlFor="book-adults">Adults</label>
            <select id="book-adults" value={this.state.adults} onChange={this.handleAdults}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="col-6 purchase-form-children-number">
            <label htmlFor="book-children">Children (Age 1-17)</label>
            <select id="book-children" value={this.state.children} onChange={this.handleChildren} >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <label htmlFor="book-hotel">Hotel category</label>
        <select id="book-hotel" value={this.state.hotelPrice} onChange={this.handleHotel}>
          {optionTemplate}
        </select>

        <p>Rooms</p>
        <div className="row">
          <div className="col-10">
            <input type="checkbox"
              id="book-sngl"
              name="sngl"
              value="100"
              onChange={this.handleRooms.bind(this, 1)} />
            <label htmlFor="book-sngl">SNGL</label><br />

            <input type="checkbox"
              id="book-dbl"
              name="dbl"
              value="200"
              onChange={this.handleRooms.bind(this, 2)} />
            <label htmlFor="book-dbl">DBL</label><br />

            <input type="checkbox"
              id="book-dbl-chld"
              name="dblChld"
              value="250"
              onChange={this.handleRooms.bind(this, 3)} />
            <label htmlFor="book-dbl-chld">DBL + CHLD</label><br />

            <input type="checkbox"
              id="book-dbl-2chld"
              name="dbl2chld"
              value="300"
              onChange={this.handleRooms.bind(this, 4)} />
            <label htmlFor="book-dbl-2chld">DBL + 2CHLD</label><br />

            <input type="checkbox"
              id="book-trpl"
              name="trpl"
              value="300"
              onChange={this.handleRooms.bind(this, 5)} />
            <label htmlFor="book-trpl">TRPL</label><br />

            <input type="checkbox"
              id="book-trpl-chld"
              name="trplChld"
              value="350"
              onChange={this.handleRooms.bind(this, 6)} />
            <label htmlFor="book-trpl-chld">TRPL + CHLD</label><br />
          </div>
          <div className="col-2">
            <label className="hide-label" htmlFor="sngl-room-select">Single room: quantity</label>
            <select id="sngl-room-select"
              className="select-room-qty"
              name="snglRoomsCount"
              disabled={this.state.isChecked1}
              value={this.state.snglRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label className="hide-label" htmlFor="dbl-room-select">Double room: quantity</label>
            <select id="dbl-room-select"
              className="select-room-qty"
              name="dblRoomsCount"
              disabled={this.state.isChecked2}
              value={this.state.dblRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label className="hide-label" htmlFor="dblChld-room-select">Double + Child room: quantity</label>
            <select id="dblChld-room-select"
              className="select-room-qty"
              name="dblChldRoomsCount"
              disabled={this.state.isChecked3}
              value={this.state.dblChldRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label className="hide-label" htmlFor="dbl2chld-room-select">Double + 2 Child room: quantity</label>
            <select id="dbl2chld-room-select"
              className="select-room-qty"
              name="dbl2chldRoomsCount"
              disabled={this.state.isChecked4}
              value={this.state.dbl2chldRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label className="hide-label" htmlFor="trpl-room-select">Triple room: quantity</label>
            <select id="trpl-room-select"
              className="select-room-qty"
              name="trplRoomsCount"
              disabled={this.state.isChecked5}
              value={this.state.trplRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <label className="hide-label" htmlFor="trplChld-room-select">Triple + Child room: quantity</label>
            <select id="trplChld-room-select"
              className="select-room-qty"
              name="trplChldRoomsCount"
              disabled={this.state.isChecked6}
              value={this.state.trplChldRoomsCount}
              onChange={this.handleRoomsCount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <label htmlFor="book-board-type">Hotel Board Types</label>
        <select id="book-board-type" value={this.state.boardType} onChange={this.handleBoardType}>
          <option value="0">RO (Room only)</option>
          <option value="5">BB (Breakfast)</option>
          <option value="10">HB (Breakfast and Dinner)</option>
          <option value="15">FB (Beakfast, Lunch and Dinner)</option>
          <option value="20">AL (All Inclusive)</option>
        </select>

        <p>Total: <span className="total-price">${totalPrice}</span></p>
        <button type="submit" className="submit-btn" disabled={!this.state.formValid}>Buy</button>
      </form>
    );
  }
}

export default PurchaseForm;