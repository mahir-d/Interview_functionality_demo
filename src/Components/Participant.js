/**
 * Participant component manages the given participant’s audio and video tracks.
 * Each of these tracks are represented via child Track components.
 */

import React, { Component } from 'react'
import Track from './Track';
export class Participant extends Component {

    constructor(props) {
        super(props);
        const existingPublications = Array.from(this.props.participant.tracks.values());
        const existingTracks = existingPublications.map(publication => publication.track);
        const nonNullTracks = existingTracks.filter(track => track != null)

        this.state = {
            tracks: nonNullTracks,
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    componentDidMount() {
        if (!this.props.localParticipant) {
            //This event gets triggered when remote Participant subscribes a new track
            this.props.participant.on('trackSubscribed', track => this.addTrack(track));
            //This event gets triggered when remote Participant unsubscribes a new track
            this.props.participant.on('trackUnsubscribed', track => this.removeTrack(track));
        }
    }

    /**
     * This function adds the track which was subscribed by the
     * remote user recently
     * @param {the new track which was added for the current participant} track
     */
    addTrack(track) {
        this.setState({
            tracks: [...this.state.tracks, track]
        });
    }

    /**
     * This function removes the track which was removed or unsubscribed by the
     * remote user
     * @param {the track which was removed by the remote participant} track 
     */
    removeTrack(track) {
        this.setState({
            tracks: this.state.tracks.filter(t => t.name !== track.name)
            // remoteParticipants: this.state.remoteParticipants.filter(p => p.identity !== participant.identity)
        })
    }

    componentDidUpdate(){
        let screenShareDomElement = document.getElementsByClassName("remoteParticipantScreenShare")

        console.log(screenShareDomElement)
    }


    render() {
        return (
            <div>
                <div className="participant" id={this.props.participant.identity}>
                    {   
                        this.state.tracks.map(track =>
                            <Track key={track} filter={this.state.filter} track={track} localParticipant={this.props.localParticipant} />)
                    }


                    <div className="identity">{this.props.participant.identity}</div>
                </div>
            </div>
        )
    }
}

export default Participant
