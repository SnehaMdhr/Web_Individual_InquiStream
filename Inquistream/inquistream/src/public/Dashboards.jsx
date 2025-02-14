import React from "react";
import "./Dashboard.css";
import newlog from "../assets/image/newlog.png";

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="logon">
          <a href="./dashboard"><img className="logo" src={newlog} alt="Logo" /></a>
        </div>
        <div className="Logout">
          <button onClick={() => window.location.href = './login'}>
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </button>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="navbar">
        <ul>
          <li><a href="./dashboard"><i className="fa-solid fa-house"></i> Home</a></li>
          <li><a href="./add"><i className="fa-solid fa-user-plus"></i>Add Inquiry</a></li>
          <li><a href="./list"><i className="fa-solid fa-list"></i>Inquiry List</a></li>
          <li><a href="./enroll"><i className="fa-solid fa-users"></i>Enrolled</a></li>
          <li><a href="./staff"><i className="fa-solid fa-user-tie"></i>Staff</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container">
        
        {/* Boxes Section */}
        <div className="box-container">
          {/* Box 1 (Welcome Message) */}
          <div className="boxWell">
            <h3>Welcome to InquiStream 🎉</h3>
            <p>
              InquiStream helps you manage inquiries efficiently, ensuring seamless organization of customer requests, project proposals, and service inquiries.
            </p>
          </div>

          {/* Box 2 (What is InquiStream?) */}
          <div className="box">
            <h3>What is InquiStream?</h3>
            <p>
              A platform designed to track and manage inquiries, providing automated responses and real-time collaboration.
            </p>
          </div>

          {/* Box 3 (Key Features) */}
          <div className="box">
            <h3>Key Features 🚀</h3>
            <ul>
              <li>📊 Efficient Inquiry Tracking</li>
              <li>🤖 Automated Responses</li>
              <li>💬 Collaboration Tools</li>
              <li>🔍 Customizable Filters</li>
            </ul>
          </div>

          {/* Box 4 (How It Helps You) */}
          <div className="box">
            <h3>How It Helps You 💡</h3>
            <ul>
              <li>⏳ Save time by automating tasks.</li>
              <li>📬 Ensure timely responses.</li>
              <li>📈 Improve customer service quality.</li>
              <li>📊 Gain insights from inquiry data.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
