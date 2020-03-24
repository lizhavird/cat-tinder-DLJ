import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
 render(){
     return(
            <div>
            <Jumbotron>
                <h1 className="display-3">Cat Tinder!</h1>
                <p className="lead">Match with your cat sweetheart 💕:)</p>
            </Jumbotron>
            </div>
     )
 }
}

export default Header;