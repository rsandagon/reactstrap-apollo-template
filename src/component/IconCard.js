import React, { Component } from 'react';
import { Card, CardText }  from 'reactstrap';

class IconCard extends Component {
  render() {
    return (
      <Card body className="text-center text-white bg-success o-hidden h-100">
        <CardText>
          <span className="h3"> {this.props.title} </span><br/>
          <span>{this.props.caption}</span>
        </CardText>
        <div className="card-body-icon">
        <i className={`fa ${this.props.icon}`} />  
        </div>
      </Card>
    );
  }
}

export default IconCard;
