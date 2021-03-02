import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import CandidateExpereinces from './CandidateExpereinces';
import CandidateEducation from './CandidateEducation';
import CandidateContact from './CandidateContact';
import CandidateGrades from './CandidateGrades';
import CandidateSkills from './CandidateSkills';
const axios = require('axios');

export class StudentProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentData: null,
        }
    }
    async componentDidMount() {
        console.log("component did mount")
        const response = await axios.get('https://us-central1-minos-labs-57c35.cloudfunctions.net/student/10005')
        console.log(response.data)
        this.setState({
            studentData: response.data
        })

    }

    render() {

        if (this.state.studentData == null) {

            return (
                <div>
                    ... Loading
                </div>
            )
        }
        else {
            return (
                <div>
                    <Container >
                        <Row >
                            <Col sm="12" className="overflow-auto studentProfile studentProfileInnerComponent">
                                <h4>Candidate Profile</h4>

                                <CandidateContact studentName={this.state.studentData.name} studentEmail={this.state.studentData.email}></CandidateContact>
                                {/* These are hardcoded for now the Grades. Need fix */}
                                
                                <h4>Candidate Grades</h4>
                                <CandidateGrades></CandidateGrades>

                                <h4>Candidate Expereinces</h4>
                                {
                                    this.state.studentData.experiences.map(studentExp => (

                                        < CandidateExpereinces key={studentExp.expId} studentExp={studentExp} ></CandidateExpereinces>
                                    ))
                                }
                                <h4>Candidate Skills</h4>
                                <CandidateSkills studSkills={this.state.studentData.skills}></CandidateSkills>
                                <h4>Candidate Education</h4>
                                {
                                    this.state.studentData.educations.map(studentEdu => (
                                        <CandidateEducation key={studentEdu.edId} studentEdu={studentEdu}></CandidateEducation>
                                    ))

                                }

                            </Col>
                        </Row>

                    </Container>

                    
                </div>
            )
        }
    }
}

export default StudentProfile
