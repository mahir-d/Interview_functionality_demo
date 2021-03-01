/**The Room component is the container for all the unique participants
 * in the video room. It also listens for new remote participants coming
 * or existing remote participants leaving. It can have one or more child
 * Participant components.
 * */

import React, { Component } from 'react'
import Participant from './Participant';
import Toolbar from './Toolbar'
export default class Room extends Component {

    constructor(props) {
        super(props);

        this.state = {

            remoteParticipants: Array.from(this.props.room.participants.values()),
        }

        this.leaveRoom = this.leaveRoom.bind(this);
    }

    componentDidMount() {
        /**
         * Every time a new remote participant joins or leaves the room,
         * a connection event is emitted that you’re listening for in this
         * component
         */
        this.props.room.on('participantConnected', participant => this.addParticipant(participant));
        this.props.room.on('participantDisconnected', participant => this.removeParticipant(participant));

        /** If the user (the local participant) closes the browser window,
            before the window unloads, it will remove the participant
            from the room
        */
        window.addEventListener("beforeunload", this.leaveRoom);
    }

    componentWillUnmount() {
        this.leaveRoom();
    }

    addParticipant(participant) {
        console.log(`${participant.identity} has joined the room.`);
        this.setState({
            remoteParticipants: [...this.state.remoteParticipants, participant]
        });
    }
    removeParticipant(participant) {
        console.log(`${participant.identity} has left the room`);
        this.setState({
            remoteParticipants: this.state.remoteParticipants.filter(p => p.identity !== participant.identity)
        });
    }

    leaveRoom() {
        this.props.room.localParticipant.tracks.forEach(publication => {
            console.log(publication)
            const attachedElements = publication.track.detach();
            attachedElements.forEach(element => element.remove());
        })
        this.props.room.disconnect();
        this.props.leaveRoom();
    }

    render() {

        let waiting =true;
        
        if(this.state.remoteParticipants!=0){
            waiting = false;
        }

        return (

            <div className="participants">

                        <h4 id='screenBanner'>You are currently sharing your screen!</h4>
                        
                        <div style={{display: waiting ? "flex" : "none"}}className="placeHolder">
                            <p>Waiting for participants</p>
                        </div>
                        
                        <Participant key={this.props.room.localParticipant.identity} localParticipant={true} participant={this.props.room.localParticipant} />

                        {
                        this.state.remoteParticipants.map(participant =>
                            <Participant key={participant.identity} localParticipant={false} participant={participant} />
                        )
                        }
                   
               

                <div className="row ">
                    <div className="col-12 d-flex align-items-end justify-content-center">
                        {/* Move this to tool bar later */}
                        {/* <button id="leaveRoom" onClick={this.leaveRoom}>Leave Room</button> */}
                        <Toolbar room={this.props.room} leaveMeeting={this.leaveRoom} videoToggle={this.props.videoToggle} audioToggle={this.props.audioToggle}></Toolbar>
                    </div>
                </div>
                
            </div>


        )
    }


}

