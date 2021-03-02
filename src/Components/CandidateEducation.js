import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import { List } from 'reactstrap';
export class CandidateEducation extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Card>
                    {/* <CardHeader>Candidate Expereince</CardHeader> */}
                    <CardBody>
                        <CardTitle tag="h5">{this.props.studentEdu.schoolName}</CardTitle>
                        <List type="inline">
                            <li>    Degree: {this.props.studentEdu.comments}</li>
                            <li>Major: {this.props.studentEdu.major}</li>
                            <li>  Start Date: {this.props.studentEdu.schoolStartDate}</li>
                            <li> End Date: {this.props.studentEdu.schoolEndDate}</li>
                        </List>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CandidateEducation

