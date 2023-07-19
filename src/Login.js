import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './Login.css';
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL,
            })
          );
        }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                    })
                );
            });
        }).catch(error => alert(error));
    };

  return (
    <>
    <div className="login__logo">
        <img 
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""
        /> 
    <div className="login">
        <div className="login__header">
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
        </div>

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            <button type="submit" onClick={loginToApp}><p>Sign In</p></button>
        </form>
        
    </div>

    <div className="login__bottom">
        <p>New to LinkedIn?{" "}
        <span className="login__register" onClick={register}>Join Now</span>
        </p>
    </div>
    </div>
    <div className="login__footer">
        <img 
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""
        /> 
        <p>User Agreement</p>
        <p>Privacy Policy</p>
        <p>Your California Privacy Choices</p>
        <p>Community Guidelines</p>
        <p>Cookie Policy</p>
        <p>Copyright Policy</p>
        <p>Send Feedback</p>
        <div className="login__footerLogo">
            <p>Language</p>
            <ExpandMoreIcon />
        </div>
    </div>
    </>

  )
}

export default Login
