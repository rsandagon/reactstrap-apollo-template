import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { Line , Pie } from 'react-chartjs-2';

const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const dataPie = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};



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
            <Card key="chart-line">
                <CardHeader>Line Chart</CardHeader>
                <CardBody>
                    <Line data={dataLine} />
                </CardBody>
            </Card>,
            <Card key="chart-pie">
                <CardHeader>Pie Chart</CardHeader>
                <CardBody>
                    <Pie data={dataPie} />
                </CardBody>
            </Card>

        ]);
    }
}

export default ChartContainer;