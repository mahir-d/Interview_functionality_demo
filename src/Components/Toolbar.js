import React, { Component, useState } from 'react';
import './Interview.css'
const{LocalVideoTrack}=require('twilio-video');
// import Room from './Room'

// import Track from './Track'
// import Participant from './Participant'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

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
            screen_share_flag: false,
            screenTrack: null,

        }
        this.muteAudio = this.muteAudio.bind(this)
        this.muteCamera = this.muteCamera.bind(this)
        this.shareScreenHandler=this.shareScreenHandler.bind(this)
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
                if (publication.track.name != "screenShare") {
                    publication.track.disable();
                    this.setState({
                        video_mute: true
                    })
                }

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
    async shareScreenHandler(){
    //    const stream=await navigator.mediaDevices.getDisplayMedia();
    //    const screenTrack = new LocalVideoTrack(stream.getTracks()[0]);
    //    this.props.room.localParticipant.publishTrack(screenTrack)
    //     const screenVid = document.getElementById('mahir');
    //     console.log(screenTrack)
        // screenVid.appendChild(screenTrack)
        if (this.state.screen_share_flag == false) {
            navigator.mediaDevices.getDisplayMedia().then(stream => {
                const screenVid = new LocalVideoTrack(stream.getTracks()[0], { name: "screenShare" });
                //shareScreen.innerHTML = 'Stop sharing';
                screenVid.mediaStreamTrack.onended = () => { this.shareScreenHandler() };
                this.setState({
                    screenTrack: screenVid,
                    screen_share_flag: true
                })
                this.props.room.localParticipant.publishTrack(this.state.screenTrack);
            }).catch(() => {
                alert('Could not share the screen.');
            });
        }
        else {
            this.props.room.localParticipant.unpublishTrack(this.state.screenTrack);
            this.state.screenTrack.stop();
            this.setState({
                screenTrack: null,
                screen_share_flag: false
            })
            //this.state.screenTrack = null;
            //shareScreen.innerHTML = 'Share screen';
        }
    }




    render(){
        return(
        <div className="d-flex align-items-center" id='tbar'>
                <button type='button' onClick={this.muteAudio} className="p-2">Mute/Unmute</button>
                <button type='button' onClick={this.muteCamera} className="p-2">Camera On/Off</button>
                <button type = 'button' onClick={this.shareScreenHandler} className="p-2">Screenshare</button>
                <button onClick={this.props.leaveMeeting} type='button' className="p-2">Leave Room</button>
        </div>
        )
    }

}