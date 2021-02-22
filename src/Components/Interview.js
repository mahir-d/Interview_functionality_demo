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
<<<<<<< HEAD
                        <div className="twilio d-flex align-items-end justify-content-center">
=======
                        <div className="twilio ">
>>>>>>> 5e65199ef449d12b9c829c60f62e85e8f7b362d7
                            <TwilioVideo></TwilioVideo>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="studentProfile">
                            Student profile
                        </div>
                    </div>
                </div>

                <div className="row secondRow">
                    <div className="col" >
                        <div className="notes">
                            Notes
                       </div>

                    </div>
                </div>

            </div >
        )
    }
}

export default Interview
