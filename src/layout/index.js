import React from 'react';
import { NavLink } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export function Layout(props){
    return(
        <>
            <ul>
                <li>
                <NavLink className="menu-link aside-newtheme" to="/activity/activity-list">
                    <span className="svg-icon menu-icon">
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Activities</Tooltip>}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                    </svg>
                    {/* <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} /> */}
                    </OverlayTrigger>
                    </span>
                    <span className="menu-text ">Activities</span>
                </NavLink>
                </li>
            </ul>
        </>
    )
}