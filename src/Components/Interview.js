import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interview.css'
import TwilioVideo from './TwilioVideo';

export class Interview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row firstRow">
                    <div className="col-sm-12 col-md-8"  >
                        <div className="twilio ">
                            <TwilioVideo></TwilioVideo>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="studentProfile">
                                        Student profile
                                </div>
                            </div>
                            <div className="col-12" >
                                <div className="notes">
                                    Notes
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
