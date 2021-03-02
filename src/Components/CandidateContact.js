
import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col } from 'reactstrap';


export class CandidateContact extends React.Component {
    render() {
            return (
            <div>


                <Card>
                                    <CardBody>
                                        <CardText>Name: {this.props.studentName}</CardText>
                                        <CardText>Email: {this.props.studentEmail}</CardText>
                                    </CardBody>
                    </Card>

                </div>
            )
        }
    }


export default CandidateContact
