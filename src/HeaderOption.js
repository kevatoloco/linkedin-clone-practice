import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function HeaderOption({ avatar, Icon, title, onClick, arrowDropIcon, color }) {
    const user = useSelector(selectUser);

    
  const textIcon = (text, icon) => (
    <>
    <div className="headerOption__text">
        {text}
    </div>

    <div className="headerOption__dropIcon">
        {icon}
    </div>
    </>
  )

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" style={{ color: color}} />}
            {avatar && <Avatar src={user?.photoURL} className="headerOption__icon">{user?.email[0]}</Avatar>}
            <h3 className="headerOption__title" style={{color: color}}>{textIcon(title, arrowDropIcon)}</h3>
        </div>
    )
}

export default HeaderOption;