import React from 'react';
import Slider from './Slider';

class Home extends React.Component {
  componentWillMount() {
    document.title = "Home";
  }

  render() {
    return (
      <div>
        <Slider />
        <div className="continent-wrapper">
          <h2 className="home-title">Where can our trips take you?</h2>
          <div className="continent-list">
            <div className="row continent-row">
              <div className="col-6 left-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/southamerica.jpg"} alt="southamerica" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">Argentina</a></li>
                      <li><a href="/">Bolivia</a></li>
                      <li><a href="/">Brazil</a></li>
                      <li><a href="/">Chile</a></li>
                      <li><a href="/">Ecuador</a></li>
                      <li><a href="/">Peru</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>South America</h3>
                  <p>Awaken your senses, exploring ancient civilisations, vibrant rainforests and buzzing cities. Enjoy the colours... </p>
                </div>
              </div>
              <div className="col-6 rigth-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/australia.jpg"} alt="australia" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">Australia</a></li>
                      <li><a href="/">New Zealand</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>Australia and New Zealand</h3>
                  <p>Discover natural wonders in the South Pacific, where roaring oceans meet pristine beaches... </p>
                </div>
              </div>
            </div>

            <div className="row continent-row">
              <div className="col-6 left-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/europe.jpg"} alt="europe" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">France</a></li>
                      <li><a href="/">Germany</a></li>
                      <li><a href="/">Italy</a></li>
                      <li><a href="/">United Kingdom</a></li>
                      <li><a href="/">Spain</a></li>
                      <li><a href="/">Switzerland</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>Europe and Britain</h3>
                  <p>A true cultural Smorgasbord, Europe is steeped in history and bursting with flavour and new horizons. </p>
                </div>
              </div>
              <div className="col-6 rigth-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/morocco-spices.jpg"} alt="spices" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">Egypt</a></li>
                      <li><a href="/">Sudan</a></li>
                      <li><a href="/">Mali</a></li>
                      <li><a href="/">Morocco</a></li>
                      <li><a href="/">Kenya</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>Africa and the Middle East</h3>
                  <p>Learn to haggle in colourful Moroccan souks, cross deserts on the Silk Road and gaze across the...</p>
                </div>
              </div>
            </div>

            <div className="row continent-row">
              <div className="col-6 left-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/asia.jpg"} alt="asia" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">China</a></li>
                      <li><a href="/">Japan</a></li>
                      <li><a href="/">Singapore</a></li>
                      <li><a href="/">South Korea</a></li>
                      <li><a href="/">Kuwait</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>Asia</h3>
                  <p>Be dazzled by shining pagodas, modern cityscapes, age-old heritage and new technology… explore and appreciate the many facets of Asia.</p>
                </div>
              </div>
              <div className="col-6 rigth-continent">
                <div className="continent-img">
                  <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/north-america.jpg"} alt="north-america" />
                  <div className="overlay">
                    <ul className="overlay-country-list">
                      <li>Countries</li>
                      <li><a href="/">USA</a></li>
                      <li><a href="/">Mexico</a></li>
                      <li><a href="/">Canada</a></li>
                      <li><a href="/">Cuba</a></li>
                      <li><a href="/">Costa Rica</a></li>
                      <li><a href="/" className="overlay-see-more">See more →</a></li>
                    </ul>
                  </div>
                </div>
                <div className="continent-content">
                  <h3>North and Central America</h3>
                  <p>Take a bite from the Big Apple, gaze out over the Grand Canyon and uncover the American Indian way...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="home-title home-advantages-title">Reason to book with us</h2>
        <div className="row company-advantages">
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/placeholder.png"} alt="placeholder" />
            </div>
            <h3 className="company-adv-title">Authentic & Unique</h3>
            <p className="company-adv-text">
              Go off the beaten track. Our award-winning, licensed local guides provide
                incredible insights and insider tips, passionately bringing alive unique
                and off-the-beaten track experiences for you.
            </p>
          </div>
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/flag.png"} alt="flag" />
            </div>
            <h3 className="company-adv-title">Personalized & Flexible</h3>
            <p className="company-adv-text">
              Discover our enchanting world your way. Our experts completely customize
                your private tour to match your interests and preferences through their
                comprehensive knowledge of each destination.
            </p>
          </div>
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/umbrella.png"} alt="umbrella" />
            </div>
            <h3 className="company-adv-title">Safe & Secure</h3>
            <p className="company-adv-text">
              You are in safe hands. We work exclusively with licensed, qualified
                chauffeurs tested for their skill and only the highest standards of safety.
                All our vehicles are regularly tested for safety.
            </p>
          </div>
        </div>
        <div className="row company-advantages">
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/lock.png"} alt="lock" />
            </div>
            <h3 className="company-adv-title">100% Financial Protection</h3>
            <p className="company-adv-text">
              We believe in complete transparency. We are bonded members and license
                holders of all leading travel organizations. Your booking is completely secure with us.
            </p>
          </div>
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/star.png"} alt="star" />
            </div>
            <h3 className="company-adv-title">High Quality Experiences</h3>
            <p className="company-adv-text">
              Never compromise on quality. All our accommodation, services and recommended
                restaurants are tested by our team. We offer you the most comfortable, high quality vehicles.
            </p>
          </div>
          <div className="col-4 company-adv-wrapper">
            <div className="icon-box">
              <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/24-hours.png"} alt="24-hours" />
            </div>
            <h3 className="company-adv-title">Fully Supported Travel</h3>
            <p className="company-adv-text">
              You will never be stranded. Your dedicated and personal local trip coordinator
                is available around-the-clock throughout your trip. We can also offer you mobile
                phone access while you travel.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;