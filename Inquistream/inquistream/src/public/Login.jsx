import React from "react";
import { useNavigate } from "react-router-dom";  // Import for navigation
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();  // Set up the navigation hook


    return (
        <div className="background">
            <div className="login">
                <h3>Login</h3>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />

                    <div className="forgetme">
                        <a href="/forgetpass">Forget Password?</a>
                    </div>

                    <div className="LoginBtn">
                        <a href="/dashboard">
                    <button type="button">
                        Login
                    </button>
                    </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
