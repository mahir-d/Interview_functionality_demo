import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col, Progress } from 'reactstrap';

export class CandidateGrades extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardText>
                                    <div className="text-center"><h4>Course Progress</h4></div>
                                            <Progress bar color="danger" value="100">Python</Progress>
                                            <Progress bar color="primary" value="100">Penetration Testing</Progress>
                                            <Progress bar color="warning" value="40">Security Protocol</Progress>
                                            <Progress bar color="danger" value="60">Vulnerability Assessment</Progress>
                                            <Progress bar color="success" value="100">Agile/Scrum</Progress>
                                            <Progress bar color='info' value="100">Remote Productivity</Progress>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default CandidateGrades
