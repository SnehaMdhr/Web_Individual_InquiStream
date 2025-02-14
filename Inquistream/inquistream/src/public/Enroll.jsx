import React from "react";
import "./Enroll.css";
import newlog from "../assets/image/newlog.png"

const Enroll = () => {
    return (
        <>
            <div>
                <div className="header">
                    <div className="logon">
                        <a href="./dashboard">
                            <img className="logo" src={newlog} alt="Logo" />
                        </a>
                    </div>
                    <div className="Logout">
                        <button onClick={() => (window.location.href = "./login")}>
                            <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                    </div>
                </div>

                <div className="navbar">
                    <ul>
                        <li><a href="./dashboard"><i className="fa-solid fa-house"></i> Home</a></li>
                        <li><a href="./add"><i className="fa-solid fa-user-plus"></i> Add Inquiry</a></li>
                        <li><a href="./list"><i className="fa-solid fa-list"></i> Inquiry List</a></li>
                        <li><a href="./enroll"><i className="fa-solid fa-users"></i> Enrolled</a></li>
                        <li><a href="./staff"><i className="fa-solid fa-user-tie"></i> Staff</a></li>
                    </ul>
                </div>

                {/* Main Content */}
                <main className="container">
                    <h1>Enrolled Students</h1>
                </main>
            </div>
        </>
    );
};

export default Enroll;
