import React, { useState } from "react";
import Add from "../images/addavatar.png";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login()
{
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const displayName = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            
    
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/")
            } catch (err) {
                setErr(true);
                setLoading(false);
            }
        };
        
        return (
        <div>
            <div className="formContainer">
            <div className="formWrapper-login">
            <span className="logo-login">Welcome to fWhatsApp</span>
            <span className="title-login">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have a account? <Link to="/register">Register</Link></p>
            </div>
            </div>
        </div>
    );
}