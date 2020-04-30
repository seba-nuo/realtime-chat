import React, { Component } from 'react';
//
import './search-styles.css'
//
class Search extends Component{

    render(){
        return(
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search"/>
            </div>
        );
    }
}

export default Search;