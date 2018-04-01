import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

class TableContainer extends Component {

    render() {

        return ([
            <Row className="justify-content-between mb-3" key="dboard-header">
                <Col xs={12}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Tables</li>
                    </ol>
                </Col>
            </Row>,
            <Card key="table-card">
                <CardHeader>Table Sample</CardHeader>
                <CardBody>
                    table here
                </CardBody>
            </Card>
        ]);
    }
}

export default TableContainer;