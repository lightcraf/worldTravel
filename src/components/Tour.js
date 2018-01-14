import React from 'react';
import TourAPI from '../api';
import PurchaseForm from './PurchaseForm';

class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.tour = TourAPI.get(
      parseInt(props.match.params.number, 10)
    );
    this.state = {
      imgSrc: process.env.PUBLIC_URL + `/images/${this.tour.thumbImages[0].thumbImg1}`,
      showForm: true
    };

    this.handleThumbsGallery = this.handleThumbsGallery.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentWillMount() {
    document.title = this.tour.title;
  }

  handleThumbsGallery(event) {
    if (event.target.nodeName === "IMG") {
      this.setState({ imgSrc: event.target.src });
    }
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    if (!this.tour) {
      return <div>Sorry, but the tour was not found</div>
    }
    return (
      <div className="row tour-page">
        <div className="col-4">
          <div className="thumbnail-wrapper">
            <div className="thumb-large">
              <img src={this.state.imgSrc} alt={this.tour.country} />
            </div>
            <ul className="js-thumb-items" onClick={this.handleThumbsGallery}>
              <li className="thumb-small">
                <img src={process.env.PUBLIC_URL + `/images/${this.tour.thumbImages[0].thumbImg1}`} alt={this.tour.country} />
              </li>
              <li className="thumb-small">
                <img src={process.env.PUBLIC_URL + `/images/${this.tour.thumbImages[1].thumbImg2}`} alt={this.tour.country} />
              </li>
              <li className="thumb-small">
                <img src={process.env.PUBLIC_URL + `/images/${this.tour.thumbImages[2].thumbImg3}`} alt={this.tour.country} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8 tour-description-wrapper">
          <header>
            <h2 className="tour-title-wrapper">{this.tour.title}</h2>
          </header>
          <p>Country: {this.tour.country}</p>
          <p>Price: ${this.tour.price}</p>
          <p className="tour-description">{this.tour.shortDescription}</p>
          <p className="tour-description">{this.tour.description}</p>
          <button className="book-btn" onClick={this.toggleForm} aria-expanded="false" aria-controls="collapsible-0">Book Now</button>
          <div className={this.state.showForm ? "hide-purchase-form" : "show-purchase-form"} id="collapsible-0" aria-hidden="true">
            <PurchaseForm tour={this.tour} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tour;