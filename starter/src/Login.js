import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userStorageValue = localStorage.getItem(username);
        if (!username || !password) {
            setError("Please enter username and password");
        }else if (!userStorageValue){
            setError("username not exist");
        }
        else if (userStorageValue !== password) {
            setError("password was incorrect");
        } else {
            setError("");
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("currentUsername", username);
            if(!localStorage.getItem(`token-${username}`)){
                localStorage.setItem(`token-${username}`, Math.random().toString(36).substr(-8));
            }
            
            navigate("/");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <Link to={"/signup"} >Create a new account</Link>
        </div>
    );
}

export default Login;