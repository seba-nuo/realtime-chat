import React, { Component } from 'react';

class HeadUser extends Component{

    render(){

        return(
            <div className="head-useragent">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="PerfilImage"></img>
                    <i class="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
            </div>
        );
    }
}
export default HeadUser;