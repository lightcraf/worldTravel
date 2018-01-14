import React from 'react';
import Pagination from './Pagination';

class TourMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
      filterParameter: "",
      sortValue: "",
      searchValue: "",
      searchIn: "everywhere",
      showFilterList: false,
      showFilterList2: false
    };

    this.handleFilterArray = this.handleFilterArray.bind(this);
    this.handleSortArray = this.handleSortArray.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchIn = this.handleSearchIn.bind(this);
    this.toggleFilterList = this.toggleFilterList.bind(this);
  }

  componentWillMount() {
    document.title = "Tours";
  }

  handleFilterArray(event) {
    var target = event.target;
    var dataFilterValue = target.getAttribute("data-filter");
    var dataFilterParameter = target.getAttribute("data-param");

    if (target.nodeName !== "A" || dataFilterValue === null) {
      return;
    }

    this.setState(prevState => ({
      filterValue: dataFilterValue
    }));
    
    this.setState({ filterParameter: dataFilterParameter });
  }

  handleSortArray(event) {
    this.setState({ sortValue: event.target.value });
  }

  handleSearch(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchIn(event) {
    this.setState({ searchIn: event.target.value });
  }

  toggleFilterList(event) {
    event.preventDefault();
    var target = event.target;
    if (target.id === "js-show-countries") {
      this.setState({ showFilterList: !this.state.showFilterList });
    } else if (target.id === "js-show-tour-type") {
      this.setState({ showFilterList2: !this.state.showFilterList2 });
    }
  }

  render() {
    return (
      <div className="row tours-list-page">
        <nav className="col-2 left-menu" onClick={this.handleFilterArray}>
          <h2>Menu</h2>
          <ul className="left-menu-list" onClick={this.toggleFilterList}>
            <li><a href="#tours" data-filter="all-content" className="left-menu-item">All tours</a></li>
            <li><a href="#tours" id="js-show-countries" 
                className={this.state.showFilterList ? "left-menu-item caret-rotate" : "left-menu-item caret"} 
                aria-expanded="false" aria-controls="collapsible-0">Сountries</a>
            </li>
            <li>
              <ul className={this.state.showFilterList ? "left-menu-show" : "left-menu-hide"} id="collapsible-0" aria-hidden="true">
                <li><a href="#tours" data-filter="Denmark" data-param="country" className="left-menu-item">Denmark</a></li>
                <li><a href="#tours" data-filter="England" data-param="country" className="left-menu-item">England</a></li>
                <li><a href="#tours" data-filter="Estonia" data-param="country" className="left-menu-item">Estonia</a></li>
                <li><a href="#tours" data-filter="Finland" data-param="country" className="left-menu-item">Finland</a></li>
                <li><a href="#tours" data-filter="France" data-param="country" className="left-menu-item">France</a></li>
                <li><a href="#tours" data-filter="Germany" data-param="country" className="left-menu-item">Germany</a></li>
                <li><a href="#tours" data-filter="Italy" data-param="country" className="left-menu-item">Italy</a></li>
                <li><a href="#tours" data-filter="Netherlands" data-param="country" className="left-menu-item">Netherlands</a></li>
                <li><a href="#tours" data-filter="Norway" data-param="country" className="left-menu-item">Norway</a></li>
                <li><a href="#tours" data-filter="Poland" data-param="country" className="left-menu-item">Poland</a></li>
                <li><a href="#tours" data-filter="Portugal" data-param="country" className="left-menu-item">Portugal</a></li>
                <li><a href="#tours" data-filter="Spain" data-param="country" className="left-menu-item">Spain</a></li>
                <li><a href="#tours" data-filter="Thailand" data-param="country" className="left-menu-item">Thailand</a></li>
                <li><a href="#tours" data-filter="Vietnam" data-param="country" className="left-menu-item">Vietnam</a></li>     
              </ul>
            </li>
            <li><a href="#tours" id="js-show-tour-type" 
                className={this.state.showFilterList2 ? "left-menu-item caret-rotate" : "left-menu-item caret"} 
                aria-expanded="false" aria-controls="collapsible-1">Types of tours</a>
            </li>
            <li>
              <ul className={this.state.showFilterList2 ? "left-menu-show" : "left-menu-hide"} id="collapsible-1" aria-hidden="true">
                <li><a href="#tours" data-filter="wildlife" data-param="tourType" className="left-menu-item">Wildlife Tours</a></li>
                <li><a href="#tours" data-filter="food-wine" data-param="tourType" className="left-menu-item">Food and Wine Tours</a></li>
                <li><a href="#tours" data-filter="luxury" data-param="tourType" className="left-menu-item">Luxury Tours</a></li>
                <li><a href="#tours" data-filter="walking" data-param="tourType" className="left-menu-item">Walking Tours</a></li>
                <li><a href="#tours" data-filter="cultural" data-param="tourType" className="left-menu-item">Cultural Tours</a></li>
                <li><a href="#tours" data-filter="adventure" data-param="tourType" className="left-menu-item">Adventure Tours</a></li>
              </ul>
            </li>
            <li><a href="#tours" data-filter="hot-tour" className="left-menu-item hot-tour-link">Hot tours</a></li>
          </ul>

          <div className="search" role="search">
            <label htmlFor="search-content" className="hide-label">Search</label>
            <input type="search" id="search-content" placeholder="Search" title="Search" value={this.state.searchValue} onChange={this.handleSearch} /><br />
            
            <input id="search-title" type="radio" name="search" value="title" onChange={this.handleSearchIn} />
            <label htmlFor="search-title"><span></span>in title</label><br />

            <input id="search-description" type="radio" name="search" value="description" onChange={this.handleSearchIn} />
            <label htmlFor="search-description"><span></span>in description</label><br />
            
            <input id="search-everywhere" type="radio" name="search" value="everywhere" onChange={this.handleSearchIn} defaultChecked />
            <label htmlFor="search-everywhere"><span></span>everywhere</label>
          </div>

          <div className="sort" role="search">
            Sort by <select value={this.state.sortValue} onChange={this.handleSortArray}>
              <option value=""></option>
              <option value="title">Title</option>
              <option value="country">Countries</option>
              <option value="price-ascending">Price: Low to High</option>
              <option value="price-descending">Price: High to Low</option>
            </select>
          </div>
        </nav>
        
        <Pagination
          filterValue={this.state.filterValue}
          filterParameter={this.state.filterParameter}
          sortValue={this.state.sortValue}
          searchValue={this.state.searchValue}
          searchIn={this.state.searchIn} />
      </div>
    );
  }
}

export default TourMenu;