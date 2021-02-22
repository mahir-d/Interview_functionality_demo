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

    }
    muteAudio(){
    this.props.room.localParticipant.audioTracks.forEach(publication => {
        publication.track.disable();
      });
    }
    muteCamera(){
      this.props.room.localParticipant.videoTracks.forEach(publication => {
        publication.track.disable();
      });
    }
    unmuteAudio(){
        this.props.room.localParticipant.audioTracks.forEach(publication => {
            publication.track.enable();
          });
        }
    unmuteCamera(){
        this.props.room.localParticipant.videoTracks.forEach(publication => {
        publication.track.enable();
        });
    }
    
    render(){
        return(
        <div class="d-flex align-items-center" id='tbar'>
            <button type = 'button' class="p-2">Camera On/Off</button>
            <button type = 'button' class="p-2">Mute/Unmute</button>
            <button type = 'button' class="p-2">Screenshare</button>
            <button onClick='leaveroom()' type = 'button' class="p-2">Leave Room</button>
        </div>
        )
    }

}