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
    }

    componentDidMount() {
        if (!this.props.localParticipant) {
            //This event gets triggered when Participant eventually publishes a new track
            this.props.participant.on('trackSubscribed', track => this.addTrack(track));
        }
    }

    addTrack(track) {
        this.setState({
            tracks: [...this.state.tracks, track]
        });
    }
    render() {
        return (
            <div>
                <div className="participant" id={this.props.participant.identity}>
                    {
                        this.state.tracks.map(track =>
                            <Track key={track} filter={this.state.filter} track={track} />)
                    }
                    <div className="identity">{this.props.participant.identity}</div>
                </div>
            </div>
        )
    }
}

export default Participant
