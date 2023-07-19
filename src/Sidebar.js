import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import AddIcon from '@mui/icons-material/Add';
import SquareIcon from '@mui/icons-material/Square';


function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__article"><WebAssetIcon/></span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__background">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar" >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className="sidebar__viewProf">Who's viewed your profile</p>
                    <p className="sidebar__statNumber">35</p>
                </div>
                <div className="sidebar__statText">
                    <div className="sidebar__stat">
                        <p>Connections</p>
                        <p className="sidebar__statNumber">176</p>
                    </div>
                    <h5 className="sidebar__text">Grow your network</h5>
                </div>
            </div>

            <div className="sidebar__tools">
                <p>Access exclusive tools & insights</p>
                <div className="sidebar__premium">
                    <SquareIcon />
                    <p>Retry Premium for $0</p>
                </div>
            </div>

            <div className="sidebar__items">
                <BookmarkIcon />
                <p>My items</p>
            </div>

            <div className="sidebar__recent">
                <p>Recent</p>
                {recentItem('NVIDIA Tech Talk @UC San Di...')}
                {recentItem('Startup Jobs Expo (ONLINE)')}

                <div className="sidebar__blueLinks">
                    <p>Groups</p>
                    <div className="sidebar__events">
                        <p>Events</p>
                        <AddIcon />
                    </div>
                    <h4 className="sidebar__hashtag">Followed Hashtags</h4>
                </div>
                
            </div>

            <div className="sidebar__discover">
                <p>Discover more</p>
            </div>


        </div>
    );
}

export default Sidebar;