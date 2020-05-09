import React, { Component } from 'react';
//
import './search-styles.css'
//
class Search extends Component{

    render(){
        return(
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search"/>
                <div className="main-wrapper">
		            <i className="material-icons">search</i>
                </div>
            </div>
        );
    }
}

export default Search;