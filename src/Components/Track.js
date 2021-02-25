/**
 * Track component is responsible for attaching and rendering the track it
 * receives as props.
 */

import React, { Component } from 'react'

export class Track extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cssTagName: ""
        }
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.props.track !== null) {
            const child = this.props.track.attach();
            this.ref.current.classList.add(this.props.track.kind);
            this.ref.current.appendChild(child)
        }
        const pType = this.props.localParticipant == true ? "localParticipant" : "remoteParticipant"
        if (this.props.track.kind == "video") {

            if (this.props.track.name == "screenShare") {
                this.setState({
                    cssTagName: pType + "ScreenShare track1"
                })
            }
            else {

                this.setState({
                    cssTagName: pType + "Video track1"
                })
            }
        }
        else {
            this.setState({
                cssTagName: pType + "Audio"
            })
        }
    }
    render() {
        return (
            <div>
                <div className={this.state.cssTagName} ref={this.ref} />
            </div>
        )
    }
}

export default Track
