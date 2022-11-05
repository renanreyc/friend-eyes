import React from "react";
import "/Participant.css";
import { Card } from "../../Shared/Card/Card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

export const Participant = () => {

    return(
        <div className="participant">
            <Card>
                <video className="video" autoPlay playsInline></video>
                <FontAwesomeIcon className="muted" icon={ faMicrophoneSlash } />
                <div className="Avatar">A</div>
                <div className="name">
                    Test User Name
                </div>
            </Card>
        </div>
    )
}