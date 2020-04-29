import React, { Component } from 'react';
//

class Search extends Component{

    render(){
        return(
            <div className="searh-container">
                <input type="text" placeholder="Search"></input>
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
        );
    }
}

export default Search;