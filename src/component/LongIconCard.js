import React, { Component } from 'react';
import { CardBody, Card, CardText, Col } from 'reactstrap';

class LongIconCard extends Component {
  render() {
    return (
      <Card className="o-hidden h-100 text-center mb-3">
        <CardBody>

          <div className="d-flex justify-content-between align-items-center">
            <div className="display-3">
              <span className={`fa ${this.props.icon}`} />
            </div>

            {this.props.items.map((item, i) => {
              return <CardText key={i} className="content-container mb-0" xs={this.props.size}>
                <span className="h3"> {item.title} </span><br />
                <span>{item.caption}</span>
              </CardText>
            })}

          </div>

          <Col>

          </Col>
        </CardBody>
      </Card>
    );
  }
}

LongIconCard.defaultProps = {
  items: []
};

export default LongIconCard;