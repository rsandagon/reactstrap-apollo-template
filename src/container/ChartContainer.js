import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

class ChartContainer extends Component {

    render() {

        return ([
            <Row className="justify-content-between mb-3" key="dboard-header">
                <Col xs={12}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Charts</li>
                    </ol>
                </Col>
            </Row>,
            <Card key="chart-card">
                <CardHeader>Sample Chart</CardHeader>
                <CardBody>
                    chart here
                </CardBody>
            </Card>
        ]);
    }
}

export default ChartContainer;