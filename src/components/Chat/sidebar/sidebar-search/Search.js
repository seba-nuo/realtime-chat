import React, { Component } from "react";
//
import "./search-styles.css";
//SVG
import search from "../../../../assets/search.svg";
//
class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <div className="i_s_search-container noselectable">
          <img src={search} className="i_s_search" alt="search"/>
        </div>
        <input className="search-input" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
