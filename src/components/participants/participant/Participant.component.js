import React, { useEffect, useRef } from "react";
import "./Participant.css";
import { Card } from "../../Shared/Card/Card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Participant = ({ participant }) => {
    const videoRef = useRef(null);

    const userStream = useSelector((state) => state.mainStream)
    const remoteStream = new MediaStream();

    useEffect(() => {
        if(participant.peerConnection) {
            participant.peerConnection.ontrack = (event) => {
                event.streams[0].getTracks().forEach(track => {
                    remoteStream.addTrack(track);
                });

                videoRef.current.srcObject = remoteStream;
            }
        }

    }, [participant.peerConnection]);

    useEffect(() => {
        if(userStream && participant.currentUser) {
            videoRef.current.srcObject = userStream;
            videoRef.current.muted = true;
        }

    }, [participant.currentUser, userStream]);

    return(
        <div className="participant">
            <Card>
                <video ref={videoRef} className="video" autoPlay playsInline></video>
                <FontAwesomeIcon className="muted" icon={ faMicrophoneSlash } />
                <div style={{ background: participant.avatarColor }} className="avatar">
                    { participant.userName[0] }
                </div>
                <div className="name">
                    { participant.userName }
                    { participant.currentUser ? " (you)" : "" }
                </div>
            </Card>
        </div>
    )
}