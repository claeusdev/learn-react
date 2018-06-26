import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchtermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Videyo</h1>
          <input
            onChange={this.handleSearchtermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard {...show} key={show.trailer} />)}
        </div>
      </div>
    );
  }
}

export default Search;
