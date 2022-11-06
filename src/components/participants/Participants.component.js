import React from "react";
import "./Participants.css";
import { Participant } from "./participant/Participant.component";
import { useSelector } from "react-redux";

export const Participants = () => {
    const participants = useSelector( (state) => state.participants );
    const participantsKey = Object.keys(participants);
    const gridSize = participantsKey.length === 1 ? 1 : participantsKey.length <= 4 ? 2 : 4;
    const colSize = participantsKey.length <= 4 ? 1 : 2;
    const rowSize = participantsKey.length <= 4 
        ? participantsKey.length 
        : Math.ceil(participantsKey.length / 2)
    return(
    <div style={{
        "--grid-size": gridSize,
        "--grid-col-size": colSize,
        "--grid-row-size": rowSize,
    }}
    
    className="participants">
        {participantsKey.map(participantsKey => {
            const currentParticipant = participants[participantsKey];
            return <Participant participant={ currentParticipant } key={participantsKey} />
        })}
        

    </div>
    )
}