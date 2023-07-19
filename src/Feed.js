import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption.js';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import { Avatar } from '@mui/material';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                
                    }))
        )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Avatar src={user.photoURL} className="feed__avatar">
                    {user.email[0]}
                </Avatar>
                <form>
                    <input 
                        placeholder="Start a post"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={InsertPhotoOutlinedIcon} title='Photo' color="#378fe9"/>
                <InputOption Icon={YouTubeIcon} title='Video' color="#5f9b41"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#c37d16"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#e16745"/>
            </div>
        </div>
        <div className="feed__lineBreak">
            <hr/>
            <p>Sort by:</p>
            <h5>Top</h5>
            <ArrowDropDownIcon />
        </div>
        {/* Posts */}
        <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))} 
        </FlipMove>
    </div>
}

export default Feed;