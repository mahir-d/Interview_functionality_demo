import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MediaAccessModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [auidoToggle, setAudioToggle] = useState(true)
    const [audioBtnName, setAudioBtnName] = useState("Mute")
    const [videoToggle, setVideoToggle] = useState(true)
    const [videoBtnName, setVideoBtnName] = useState("video Off")

    const toggle = () => setModal(!modal);
    const muteToggle = () => {
        if (auidoToggle === true) {
            setAudioToggle(false)
            setAudioBtnName("Unmute")
        }
        else {
            setAudioToggle(true)
            setAudioBtnName("Mute")
        }
    }

    const videoMuteToggle = () => {
        if (videoToggle === true) {
            setVideoToggle(false)
            setVideoBtnName("Video On")
        }
        else {
            setVideoToggle(true)
            setVideoBtnName("Video Off")
        }
    }


    return (
        <div>
            <Button color="success" onClick={toggle}>Join Meeting</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}> Join With audio & video </ModalHeader>
                <ModalBody>
                    <Button disabled={!props.audioAccess} color="secondary" onClick={muteToggle}>{audioBtnName}</Button>{' '}
                    <Button disabled={!props.videoAccess} color="secondary" onClick={videoMuteToggle}>{videoBtnName}</Button>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { props.videoAudioToggle(auidoToggle, videoToggle) }}>Join Meeting</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MediaAccessModal;