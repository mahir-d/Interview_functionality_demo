import React, { Component } from 'react'
const axios = require('axios');

export class StudentProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentData: null,
        }
    }
    componentDidMount() {
        console.log("component did mount")
        var config = {
            method: 'get',
            url: 'https://us-central1-minos-labs-57c35.cloudfunctions.net/student/10005',
            headers: {}
        };

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
        }).catch(function (error) {
            console.log(error);
        });




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

                </div>
            )
        }
    }
}

export default StudentProfile
