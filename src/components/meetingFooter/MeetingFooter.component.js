import { faDesktop, faMicrophone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MeetingFooter.css";

export const MeetingFooter = () => {
    return (
        <div className="meetingFooter">
            <div className="meetingIcons">
                <FontAwesomeIcon 
                icon = { faMicrophone }
                />
            </div>
            <div className="meetingIcons">
                <FontAwesomeIcon 
                    icon = { faVideo }
                />
            </div>
            <div className="meetingIcons">
                <FontAwesomeIcon 
                    icon = { faDesktop }
                />
            </div>
        
        </div>
    );
}