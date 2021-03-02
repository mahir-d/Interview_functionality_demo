/**
 * Top most component for Twilio video component,
 * handles the user driven actions of joining and leaving the room
 * Refeence: https://www.twilio.com/blog/build-a-custom-video-chat-app-with-react-and-twilio-programmable-video
 */

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Room from './Room'
import './Interview.css'
import MediaAccessModal from './MediaAccessModal';
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
            participants: 0,
            room: null,
            cameraAccess: false,
            audioAccess: false,
            videoToggle: true,
            audioToggle: true
        }
        this.joinRoom = this.joinRoom.bind(this);
        this.endMeeting = this.endMeeting.bind(this);
        this.videoAudioToggle = this.videoAudioToggle.bind(this);
    }

    componentDidMount() {
        /** This checks for physical camera, microphone being present
         * before joining a meeting and sets camera/audio access to true
         * */
        navigator.mediaDevices.enumerateDevices().then(devices => {
            console.log(devices)
            const videoInput = devices.find(device => device.kind === 'videoinput');
            const audioInput = devices.find(device => device.kind === 'audioinput');

            if (videoInput !== undefined) {
                this.setState({
                    cameraAccess: true
                })
            }
            if (audioInput !== undefined) {
                this.setState({
                    audioAccess: true
                })
            }
        });

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
                audio: this.state.audioAccess,
                video: this.state.cameraAccess
            });
            this.setState({
                room: room,
            });
        } catch (e) {
            // Add a reactstrap alert instead

            //If the video/audio does not have permission
            if (e.code === 0) {
                alert("Please check your system permission for audio video access ")
            }
            else {
                alert(e)
            }


        }
    }

    /**
     * This video sets toggle video audio before joining the meeting
     * @param {bool} videoAccess 
     * @param {bool} audioAccess 
     */
    videoAudioToggle(audioToggle, videoToggle) {
        console.log(audioToggle, videoToggle)
        this.setState({
            audioToggle: audioToggle,
            videoToggle: videoToggle
        })

        this.joinRoom()
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
                                    <div id="wrapper">
                                    <div>
                                        <MediaAccessModal joinRoom={this.joinRoom} videoAccess={this.state.cameraAccess} audioAccess={this.state.audioAccess} videoAudioToggle={this.videoAudioToggle}></MediaAccessModal>
                                    {/* <Button disabled={disabled} color="success" onClick={this.joinRoom}>Join Meeting</Button> */}
                                        <div className="participantCount"><p>{this.state.participants} Participants Waiting</p></div>
                                        </div>
                                    </div>
                                    
                                </div>

                        : <div>

                                    <div className="twilioVideo">
                                <Room className="room" {...this.props} leaveRoom={this.endMeeting} room={this.state.room} videoToggle={this.state.videoToggle} audioToggle={this.state.audioToggle}></Room>
                                    </div>
                        </div>
                        

                    }

                </>
        )
    }

}
export default TwilioVideo

