import React from 'react';

class Services extends React.Component {
  componentWillMount() {
    document.title = "Services";
  }

  render() {
    return (
      <div className="service-wrapper">
        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Airline Ticketing</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/airline-ticketing.jpg"} alt="plane" />
              </div>
              <div className="col-9">
                <p className="service-text">With our rich industrial experience, we have become a
                  preferred Airline Ticketing Agent, based in Pune
                  (Maharashtra). All you need to do is tell us your details
                  regarding arrival, departure, destination, etc. Our
                  expert Airline Ticketing Agents are committed to offer
                  you excellent ticketing services. Contact our team of
                  Airline Ticketing Agents to get the best deal on your air travel.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Passport & Visa Services</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/passport-visa-services.jpg"} alt="passport" />
              </div>
              <div className="col-9">
                <p className="service-text">Our tour and travel company hold vast expertise in making
                  all the arrangements for Passport & Visa. Our team of experts
                  is committed to make available the best Passport & Visa
                  Services that is exactly as per clients’ requirements.
                  Our offered Passport & Visa Services are known for promptness
                  and reliability.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Travel Insurance</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/travel-insurance.jpg"} alt="travel-insurance" />
              </div>
              <div className="col-9">
                <p className="service-text">As a result, you are not able to enjoy the vacation completely.
                  Understanding the need, Dziner Travel Concepts has emerged as a
                  reliable Travel Insurance Agent. The company is a well-known tour
                  and travel company that has become a preferred name in the domain.
                  Located in Pune (Maharashtra), it is providing Travel Insurance to the clients.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>


        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Hotel Booking</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/hotel-booking.jpg"} alt="hotel" />
              </div>
              <div className="col-9">
                <p className="service-text">We are committed to turn your holidays into dream vacation.
                  We understand that accommodation is the most vital aspect of
                  any vacation. Thus, we are successfully offering Hotel
                  Booking in 5 Star Hotels, 3 Star Hotels, Luxury Resorts,
                  Motels and Apartments. We have become a preferred Hotel
                  Booking Agent in the domain.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Car & Coach Rental</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/car-rental.jpg"} alt="car" />
              </div>
              <div className="col-9">
                <p className="service-text">We are capable of providing all kinds of vehicles, including
                  Compact, Convertible, Economy, Luxury, Premium, Standard,
                  Mini Van, Compact Pick Up and MUVs & SUVs. We are also
                  offering Wedding Car Rental Services to the clients. Contact
                  our company to avail prompt Car & Coach Rental Services.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row service-item">
          <div className="col-12">
            <h2 className="service-title">Event Organizers</h2>
            <div className="row service-content-wrapper">
              <div className="col-3">
                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/event-organizers.jpg"} alt="table" />
              </div>
              <div className="col-9">
                <p className="service-text">Whether it is your birthday party or wedding, our expert team
                  of Event Organizers will make sure that you get the best of
                  everything within your budget. Our Event Organizers will also
                  help you with your Honeymoon / Anniversary Planning. Catering,
                  decorations, managing guests, etc. will all be taken care of by
                  our expert team of Event Organizers.</p>
                <a href="/services" className="service-more-btn">View more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;