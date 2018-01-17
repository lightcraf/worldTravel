import React from 'react';
import TourAPI from '../api';
import { Link } from 'react-router-dom';
import PaginationControl from './PaginationControl';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.tourItems = TourAPI.all().map(i => {
      return {
        id: i.number, mainImg: i.mainImg, title: i.title,
        country: i.country, hotTour: i.hotTour, tourType: i.tourType,
        price: i.price, shortDescription: i.shortDescription, description: i.description
      };
    });
    this.state = {
      tourItems: this.tourItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.filterValue !== prevProps.filterValue) {
      this.filterArray(this.props.filterValue);
    }
    if (this.props.sortValue !== prevProps.sortValue) {
      this.sortArray(this.props.sortValue);
    }
    if (this.props.searchValue !== prevProps.searchValue) {
      this.searchArray(this.props.searchValue);
    }
  }

  filterArray(filterValue) {
    var newFilterArray;
    if (filterValue === "hot-tour") {
      newFilterArray = this.tourItems.filter(function (i) {
        return (i.hotTour === true);
      });
    } else if (filterValue === "all-content") {
      newFilterArray = this.tourItems;
    }

    if (this.props.filterParameter === "country") {
      newFilterArray = this.tourItems.filter(function (i) {
        return (i.country === filterValue);
      });
    } else if (this.props.filterParameter === "tourType") {
      newFilterArray = this.tourItems.filter(function (i) {
        return (i.tourType === filterValue);
      });
    }

    this.setState({ tourItems: newFilterArray });
  }

  sortArray(sortParameter) {
    var newSortArray = this.state.tourItems.slice();

    if (sortParameter === "price-ascending") {
      newSortArray = newSortArray.sort(this.compareValues("price", 1));
    } else if (sortParameter === "price-descending") {
      newSortArray = newSortArray.sort(this.compareValues("price", -1));
    } else {
      newSortArray = newSortArray.sort(this.compareValues(sortParameter, 1));
    }

    this.setState({ tourItems: newSortArray });
  }

  compareValues(propertyName, order) {
    return function (object1, object2) {
      var value1 = (typeof object1[propertyName] === "string") ? object1[propertyName].toUpperCase() : object1[propertyName];
      var value2 = (typeof object2[propertyName] === "string") ? object2[propertyName].toUpperCase() : object2[propertyName];

      if (value1 < value2) {
        return -1 * order;
      } else if (value1 > value2) {
        return 1 * order;
      } else {
        return 0;
      }
    };
  }

  searchArray(searchParam) {
    var filteredList = [];
    switch (this.props.searchIn) {
      case "everywhere":
        this.tourItems.forEach((item) => {
          if (item.title.toLowerCase().toString().indexOf(searchParam) !== -1 || item.shortDescription.toLowerCase().toString().indexOf(searchParam) !== -1) {
            filteredList.push(item);
          }
        });
        break;
      case "description":
        this.tourItems.forEach((item) => {
          if (item.shortDescription.toLowerCase().toString().indexOf(searchParam) !== -1) {
            filteredList.push(item);
          }
        });
        break;
      case "title":
        this.tourItems.forEach((item) => {
          if (item.title.toLowerCase().toString().indexOf(searchParam) !== -1) {
            filteredList.push(item);
          }
        });
        break;
      default:
        break;
    }

    this.setState({ tourItems: filteredList });
  }

  render() {
    var notFound = this.state.tourItems.length === 0 ? <p>No search results found</p> : null;
    return (
      <section className="col-10 col-md-9 col-sm-8">
        {notFound}
        {this.state.pageOfItems.map(item =>
          <article key={item.id} className="row tour-list-item">
            <div className="col-4 col-sm-12">
              <div className="tour-image-wrapper">
                {item.hotTour ? (
                  <img src={process.env.PUBLIC_URL + "/images/hot.png"} className="label-hot-tour" alt="hot tour" />
                ) : (
                    null
                  )}
                <img src={process.env.PUBLIC_URL + `/images/${item.mainImg}`} className="img-responsive" alt={item.title} width={300} />
              </div>
            </div>
            <div className="col-8 col-sm-12 tour-description-wrapper">
              <header>
                <h2 className="tour-title-wrapper">
                  <Link to={`/tours/${item.id}`} className="tour-title-link">{item.title}</Link>
                </h2>
              </header>
              <p>Country: <span className="aqua">{item.country}</span></p>
              <p>Price: <span className="aqua">${item.price}</span></p>
              <p className="tour-description">{item.shortDescription}</p>
            </div>
          </article>
        )}
        <PaginationControl items={this.state.tourItems} onChangePage={this.onChangePage} />
      </section>
    );
  }
}

export default Pagination;