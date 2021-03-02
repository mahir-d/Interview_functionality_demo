import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
class LeaveMeetingModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        this.handleEndMeeting = this.handleEndMeeting.bind(this);
    }

    toggle = () => this.setState({
        modal: !this.state.modal
    })

    handleEndMeeting = () => {


        const { history } = this.props
        this.props.leaveMeeting();
        history.push({ pathname: "/feedback", state: { studentName: "Mahir Dhall hello" } })




    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Leave Meeting</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Are you sure you want to leave the meeting?</ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleEndMeeting}>End Meeting</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}





export default LeaveMeetingModal;