
import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col } from 'reactstrap';


export class CandidateContact extends React.Component {
    render() {
            return (
            <div>
                <Container>
                    <Row>
                        <Col className='contactCol'>
                            {/* <Row> */}
                            <Card>
                                <CardHeader><h2>Pranav Bhojraj</h2>pbhojraj@gmail.com</CardHeader>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                </div>
            )
        }
    }


export default CandidateContact
