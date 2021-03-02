import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Container, Row, Col, ListGroup, ListGroupItem, List } from 'reactstrap';

export default class CandidateSkills extends React.Component {
    render() {
        return (
            <div>
                <Card>
                <CardBody>
                    <List type="inline">
                        {
                            this.props.studSkills.map(skill=>(
                                <li>{skill}</li>
                            ))
                        }
                    </List>
                </CardBody>
                </Card>

            </div>
        )
    }
}
