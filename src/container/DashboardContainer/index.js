import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { IconCard, LongIconCard } from '../../component'

class DashboardContainer extends Component {

  render() {
    let items = [
      {
        title: "Life",
        caption: "Total Work Time"
      },
      {
        title: "58",
        caption: "Rides"
      },
      {
        title: "90",
        caption: "Total Ride Time"
      },
      {
        title: "80",
        caption: "Avg Ride Length"
      }
    ];

    return ([
      <Row className="justify-content-between mb-3" key="dboard-header">
          <Col xs={12}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Dashboard</li>
            </ol>
          </Col>
        </Row>,
      <LongIconCard items={items} size={3} icon="fa-car" key="dboard-icons" />,
      <Row className="mb-3" key="dboard-cards">
        <Col xs={12} md={4}>
          <IconCard icon="fa-eye" title="1000" caption="Impressions" />
        </Col>
        <Col xs={12} md={4}>
          <IconCard icon="fa-hand-o-up" title="12530" caption="Click/Touches" />
        </Col>
        <Col xs={12} md={4}>
          <IconCard icon="fa-clock-o" title="30" caption="Dwell Time" />
        </Col>
      </Row>

    ]);
  }
}

export default DashboardContainer;