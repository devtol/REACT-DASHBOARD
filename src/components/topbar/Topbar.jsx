import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                        <span className="logo">admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
