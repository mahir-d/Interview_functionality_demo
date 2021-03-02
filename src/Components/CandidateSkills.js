import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export class CandidateGrades extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                            <CardHeader><h2>Skills</h2></CardHeader>
                                <CardBody>
                                    <ListGroup horizontal>
                                        <ListGroupItem>Java</ListGroupItem>
                                        <ListGroupItem>Python</ListGroupItem>
                                        <ListGroupItem>Splunk</ListGroupItem>
                                        <ListGroupItem>React</ListGroupItem>
                                        <ListGroupItem>Wireshark</ListGroupItem>
                                    </ListGroup>
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
