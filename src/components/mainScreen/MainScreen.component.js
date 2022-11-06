import React from "react";
import { MeetingFooter } from "../meetingFooter/MeetingFooter.component";
import { Participants } from "../participants/Participants.component";
import "./MainScreen.css";

export const MainScreen = () => {

    return (
        <div className="wrapper">
            <div className="mainScreen">
                < Participants />
            </div>
            <div className="footer">
                < MeetingFooter />
            </div>
        </div>
    )
};