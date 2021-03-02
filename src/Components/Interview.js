import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interview.css'
import TwilioVideo from './TwilioVideo';
import Notes from './Notes'
import StudentProfile from './studentProfile';
class Interview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row firstRow">
                    <div className="col-sm-12 col-md-8"  >
                        <div className="twilio ">
                            <TwilioVideo {...this.props}></TwilioVideo>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="studentProfile">
                                    <StudentProfile></StudentProfile>
                                </div>
                            </div>
                            <div className="col-12" >
                                <div className="notes">
                                    <Notes></Notes>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row secondRow">

                </div>

            </div >
        )
    }
}

export default Interview
