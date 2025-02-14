import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="background">
            <div className="login">
                <h3>Reset Your Password</h3>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />

                <label htmlFor="rpassword">Retype Password:</label>
                <input type="password" id="rpassword" />

                <div className="LoginBtn">
                    <a href="/login">
                    <button type="button">
                        Reset Password
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
