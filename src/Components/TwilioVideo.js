/**
 * Top most component for Twilio video component,
 * handles the user driven actions of joining and leaving the room
 * Refeence: https://www.twilio.com/blog/build-a-custom-video-chat-app-with-react-and-twilio-programmable-video
 */

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Room from './Room'
import './Interview.css'
const axios = require('axios');
const { connect } = require('twilio-video');



class TwilioVideo extends Component {



    constructor(props) {
        super(props)

        this.state = {
            //This is the user's name to join the video room, fetch from backend
            identity: 'mahir',
            //Fetch from backend
            room_name: 'cool-room',
            room: null,
        }
        this.joinRoom = this.joinRoom.bind(this);
        this.endMeeting = this.endMeeting.bind(this);

    }

    /**
     * This is the method that will be called when the user clicks the Join Room button
     */
    async joinRoom() {

        try {
            const response = await axios.get(`http://localhost:3001/gettwilioaccesstoken?identity=${this.state.identity}`);
            const data = await response.data;
            console.log(data)
            const room = await connect(data, {
                name: this.state.room_name,
                audio: true,
                video: true
            });
            this.setState({
                room: room,
                duplicate: !this.state.duplicate
            });
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * This is the method that will be called when the user clicks the Leave meeting button
     */
    endMeeting() {
        this.setState({ room: null });
    }

    render() {
        const disabled = this.state.identity === '' ? true : false;
        return (
            <>
            
                {
                    this.state.room === null
                        ? 
                                <div className="twilioVideo">
                                    <Button disabled={disabled} color="success" onClick={this.joinRoom}>Join Meeting</Button>
                                    </div>

                        : <div>

                                    <div className="twilioVideo">
                                        <Room className="room" leaveRoom={this.endMeeting} room={this.state.room}></Room>
                                    </div>
                        </div>
                        

                    }

                </>
        )
    }

}
export default TwilioVideo

