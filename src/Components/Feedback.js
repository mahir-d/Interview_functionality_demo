import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
class Feedback extends Component {

    constructor(props) {
        super(props)

        this.state = {
            commSkills: 0,
            techDepth: 0,
            techBreadth: 0,
            problemSolving: 0,
            fundamentals: 0,
            finalDecision: "",
            hrForOnboarding: "",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        /**
         * Get student info
         * Get Hiring manager info
         */
    }


    handleChange(event) {
        console.log("I was called")
        const name = event.target.name;
        console.log(name)
        const val = event.target.value
        console.log(val)


        this.setState((prevState, currProps) => {
            return {
                [event.target.name]: event.target.value
            }
        }, () => { console.log(this.state) })

    }

    render() {
        return (
            <Container fluid >
                <Row >
                    <Col sm="12">
                        <Jumbotron fluid className="feedbackJumbotron">
                            <h1 className="display-3">Student Feedback</h1>
                            <p className="lead">Please review the student based on the interview</p>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col md="4" sm="3" xs="2"></Col>
                    <Col md="4" sm="6" xs="8">
                        <Form>
                            <h4>Rate student out of 5 for the following skills:</h4>
                            <FormGroup>
                                <Label for="communicationRange">Communication Skills - {this.state.commSkills}</Label>
                                <Input type="range" name="commSkills" id="communicationRange" min="0" max="5" value={this.state.commSkills} onInput={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="technicalDepthRange">Technical Depth - {this.state.techDepth}</Label>
                                <Input type="range" name="techDepth" id="technicalDepthRange" min="0" max="5" value={this.state.techDepth} onInput={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="technicalBreadthRange">Technical Breadth - {this.state.techBreadth}</Label>
                                <Input type="range" name="techBreadth" id="technicalBreadthRange" min="0" max="5" value={this.state.techBreadth} onInput={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="problemSolvingRange">Problem Solving Skills - {this.state.problemSolving}</Label>
                                <Input type="range" name="problemSolving" id="problemSolvingRange" min="0" max="5" value={this.state.problemSolving} onInput={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="fundamentalRange">Fundamental Concepts - {this.state.fundamentals}</Label>
                                <Input type="range" name="fundamentals" id="fundamentalRange" min="0" max="5" value={this.state.fundamentals} onInput={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="finalDecision">Final Decision</Label>
                                <Input type="select" name="finalDecision" id="finalDecision" value={this.state.finalDecision} onInput={this.handleChange}
                                    placeholder="Select your decision">
                                    <option selected>Choose...</option>
                                    <option>Accepted</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
                                </Input>
                            </FormGroup>

                            {this.state.finalDecision === "Pending" &&
                                <FormGroup>
                                    <Label for="rescheduleMeeting">Schedule a new meeting</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="rescheduleMeeting"
                                        placeholder="datetime placeholder"
                                    />
                                </FormGroup>
                            }

                            {this.state.finalDecision === "Accepted" &&
                                <FormGroup>
                                    <Label for="selectHr">Select HR manager to onboard student</Label>
                                    <Input type="select" name="hrForOnboarding" id="selectHr" value={this.state.hrForOnboarding} onInput={this.handleChange}
                                        placeholder="Select your decision">
                                        <option selected>Choose...</option>
                                        <option>HR 1</option>
                                        <option>HR 2</option>
                                        <option>HR 3</option>
                                        <option>HR 4</option>
                                    </Input>
                                </FormGroup>
                            }

                            <FormGroup>
                                <Label for="optionalComments">Optional Comments</Label>
                                <Input type="textarea" name="text" id="optionalComments" />
                            </FormGroup>



                            <Button color="primary">Submit</Button>
                        </Form>
                    </Col>
                    <Col md="4" sm="6" xs="2"></Col>
                </Row>

            </Container>

        )
    }
}

export default Feedback
