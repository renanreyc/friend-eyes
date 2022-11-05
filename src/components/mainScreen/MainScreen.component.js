import React from "react";
import { MeetingFooter } from "../meetingFooter/MeetingFooter.component";
import "./MainScreen.css";

export const MainScreen = () => {

    return (
        <div className="wrapper">
            <div className="mainScreen"></div>
            <div className="footer">
                < MeetingFooter />
            </div>
        </div>
    )
};