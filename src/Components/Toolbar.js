import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import Room from './Room'
import './Interview.css'
import Track from './Track'
import Participant from './Participant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

// function Toolbar(props){
//     let icon;
//     // const [trackOff,setTrackOff]=useState(false)
//     if (props.trackOff) {
//       icon = props.type === 'audio' ? faVideoSlash:faMicrophoneSlash ;
//     } else {
//        icon = props.type === 'audio' ? faMicrophone:faVideo;
//     }
//     return (
//         <div className="d-flex align-items-end" id='tbar'>
//           <FontAwesomeIcon icon={icon} onClick={() => props.toggleTrack()} />
//         </div>
//     );
// }
// export default Toolbar

export default class Toolbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            audio_mute: false,
            video_mute: false,

        }
        this.muteAudio = this.muteAudio.bind(this)
        this.muteCamera = this.muteCamera.bind(this)

    }
    muteAudio() {
        if (this.state.audio_mute == false) {
            this.props.room.localParticipant.audioTracks.forEach(publication => {
                publication.track.disable();
                this.setState({
                    audio_mute: true
                })
            });
        }
        else {
            this.props.room.localParticipant.audioTracks.forEach(publication => {
                publication.track.enable();
                this.setState({
                    audio_mute: false
                })
            });

        }

    }
    muteCamera() {
        if (this.state.video_mute == false) {
            this.props.room.localParticipant.videoTracks.forEach(publication => {
                publication.track.disable();
                this.setState({
                    video_mute: true
                })
            });
        }
        else {
            this.props.room.localParticipant.videoTracks.forEach(publication => {
                publication.track.enable();
                this.setState({
                    video_mute: false
                })
            });
        }

    }



    render(){
        return(
        <div class="d-flex align-items-center" id='tbar'>
                <button type='button' onClick={this.muteAudio} class="p-2">Mute/Unmute</button>
                <button type='button' onClick={this.muteCamera} class="p-2">Camera On/Off</button>
            <button type = 'button' class="p-2">Screenshare</button>
                <button onClick={this.props.leaveMeeting} type='button' class="p-2">Leave Room</button>
        </div>
        )
    }

}