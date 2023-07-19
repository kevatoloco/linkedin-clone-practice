import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import  ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import  ChatOutlinedIcon  from '@material-ui/icons/ChatOutlined';
import  SendOutlinedIcon  from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
    <div ref={ref} className="post">
        <div className="post__topIcon">
            <MoreHorizIcon />
        </div>
        <div className="post__header">
            <div className="post__headerLeft">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__headerRight">
                <div className="post__headerRightFollow">
                    <AddIcon />
                    <h4>Follow</h4>
                </div>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__stats">
            <div className="post__statsLeft">
                <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" />
                <img src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" /> 
                <p>7,326</p>
            </div>
            <div className="post__statsRight">
                <p>17 comments - 150 reposts</p>
            </div>
        </div>
        <hr />
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
            <InputOption Icon={IosShareIcon} title="Repost" color="gray" />
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
    </div>
    );
})

export default Post;