import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 1 };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  componentDidMount() {
    this.slider(this.state.slideIndex);
    this.timerID = setInterval(
      () => this.nextSlide(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  prevSlide() {
    var slides = document.getElementsByClassName("slides");
    var updatedCount = this.state.slideIndex - 1;

    if (updatedCount < 1) {
      updatedCount = slides.length;
    }

    this.setState({ slideIndex: updatedCount });
    this.slider(updatedCount);
  }

  nextSlide() {
    var slides = document.getElementsByClassName("slides");
    var updatedCount = this.state.slideIndex + 1;

    if (updatedCount > slides.length) {
      updatedCount = 1;
    }

    this.setState({ slideIndex: updatedCount });
    this.slider(updatedCount);
  }

  slider(updatedCount) {
    var slides = document.getElementsByClassName("slides");
    var slideBtn = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";
      slides[i].classList.remove("fade");
      slideBtn[i].classList.remove("current-slide");
    }

    // slides[updatedCount - 1].style.display = "block";
    slideBtn[updatedCount - 1].classList.add("current-slide");
    slides[updatedCount - 1].classList.add("fade");
  }

  selectSlide(event) {
    var target = event.target;
    var updatedCount;

    if (target.className === "slide" && target.nodeName === "SPAN") {
      updatedCount = parseInt(target.getAttribute("data-slide-to"), 10);
    } else {
      return;
    }

    this.setState({ slideIndex: updatedCount });
    this.slider(updatedCount);
  }

  render() {
    return (
      <div className="slideshow-container">
        <div className="slides-container">
          <div className="slides fade">
            <img src={process.env.PUBLIC_URL + "/images/slide-1.jpg"} alt="ocean" />
          </div>
          <div className="slides fade">
            <img src={process.env.PUBLIC_URL + "/images/slide-2.jpg"} alt="pura ulun" />
          </div>
          <div className="slides fade">
            <img src={process.env.PUBLIC_URL + "/images/slide-3.jpg"} alt="usa" />
          </div>
          <div className="slides fade">
            <img src={process.env.PUBLIC_URL + "/images/slide-4.jpg"} alt="africa" />
          </div>
          <div className="slides fade">
            <img src={process.env.PUBLIC_URL + "/images/slide-5.jpg"} alt="germany" />
          </div>
          <span className="slide-prev" onClick={this.prevSlide}>&#10094;</span>
          <span className="slide-next" onClick={this.nextSlide}>&#10095;</span>
        </div>
        <div className="slide-list" onClick={this.selectSlide}>
          <span className="slide" data-slide-to="1"></span>
          <span className="slide" data-slide-to="2"></span>
          <span className="slide" data-slide-to="3"></span>
          <span className="slide" data-slide-to="4"></span>
          <span className="slide" data-slide-to="5"></span>
        </div>
      </div>
    );
  }
}

export default Slider;