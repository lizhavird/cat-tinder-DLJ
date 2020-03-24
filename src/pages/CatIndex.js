import React, { Component } from 'react'
import { ListGroup, ListGroupItemHeading } from 'reactstrap';
class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <ListGroup>
      <ListGroupItemHeading>Cat One</ListGroupItemHeading>
      <ListGroupItemHeading>Cat Age- Cat Enjoys</ListGroupItemHeading>
      </ListGroup>
      { this.props.cats.map((cat, index) => {
  return(
    <ListGroup key={ index }>
      <h4>{ cat.name }</h4>
      <small>{ cat.age } - { cat.enjoys }</small>
    </ListGroup>
    )
  })}
      </React.Fragment>
    )
  }
}

export default CatIndex