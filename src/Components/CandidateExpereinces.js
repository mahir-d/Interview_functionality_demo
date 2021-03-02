import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import { List } from 'reactstrap';
export class CandidateExpereinces extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Card>
                    {/* <CardHeader>Candidate Expereince</CardHeader> */}
                    <CardBody>
                        <CardTitle tag="h5">{this.props.studentExp.companyName}</CardTitle>
                        <List type="inline">
                            <li>    Title: {this.props.studentExp.title}</li>
                            <li>  Start Date: {this.props.studentExp.companyStartDate}</li>
                            <li> End Date: {this.props.studentExp.companyEndDate}</li>
                            <li>Responsibilities: {this.props.studentExp.responsibilities}</li>
                        </List>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CandidateExpereinces


/**
 * "experiences": [
            {
                "companyStartDate": "2021-02-01",
                "companyEndDate": "2021-02-26",
                "title": "Full Stack Developer",
                "companyName": "Minos Labs",
                "expId": 0,
                "responsibilities": "Full stack dev"
            },
 */