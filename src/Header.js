import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return(
        <div className="header">
            
            <div className="header__left">
                <img src="logo.png" alt=""/>
                
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
                        
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" color="#000000" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title='Me' onClick={logoutOfApp} arrowDropIcon={<ArrowDropDownIcon/>}/>
                <hr/>
                <HeaderOption Icon={ViewCompactIcon} title="For Business" arrowDropIcon={<ArrowDropDownIcon/>} />
                <p className="header__rightPremium">Get Hired Faster,<br/>Try Premium Fee</p>
            </div>


        </div>
    )
}

export default Header