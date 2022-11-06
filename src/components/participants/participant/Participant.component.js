import React from "react";
import "./Participant.css";
import { Card } from "../../Shared/Card/Card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

export const Participant = ({ participant }) => {

    return(
        <div className="participant">
            <Card>
                <video className="video" autoPlay playsInline></video>
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