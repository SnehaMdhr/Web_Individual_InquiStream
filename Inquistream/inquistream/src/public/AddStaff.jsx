import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStaff.css";
import newlog from "../assets/image/newlog.png"

const AddStaff = () => {
    const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     address: "",
    //     phone: "",
    //     dob: "",
    //     age: "",
    //     gender: "",
    //     designation: "",
    //     employmentType: "",
    // });

    return (
        <div>
            {/* Header Section */}
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

            {/* Navbar */}
            <div className="navbar">
                <ul>
                    <li><a href="./dashboard"><i className="fa-solid fa-house"></i> Home</a></li>
                    <li><a href="./add"><i className="fa-solid fa-user-plus"></i> Add Inquiry</a></li>
                    <li><a href="./list"><i className="fa-solid fa-list"></i> Inquiry List</a></li>
                    <li><a href="./enroll"><i className="fa-solid fa-users"></i> Enrolled</a></li>
                    <li><a href="./staff"><i className="fa-solid fa-user-tie"></i> Staff</a></li>
                </ul>
            </div>

            {/* Staff Form */}
            <div className="container">
                <h1>Staff Form</h1>
                <div className="staff-container">
                    <form>
                        <label htmlFor="StaffName">Name:</label>
                        <input type="text" id="StaffName" name="name" required />

                        <label htmlFor="StaffEmail">Email:</label>
                        <input type="email" id="StaffEmail" name="email" required />

                        <label htmlFor="StaffAddress">Address:</label>
                        <input type="text" id="StaffAddress" name="address" required />

                        <label htmlFor="StaffPhone">Phone number:</label>
                        <input type="text" id="StaffPhone" name="phone" required />

                        <div className="age-group">
                            <label htmlFor="StaffDob">Date of Birth:</label>
                            <input type="date" id="StaffDob" name="dob" required />

                            <label htmlFor="StaffAge">Age:</label>
                            <input type="number" id="StaffAge" name="age" max="100" min="14" required />
                        </div>

                        <label>Gender:</label>
                        <div className="gender-group">
                            <label>
                                <input type="radio" name="gender" value="Male" /> Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" /> Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Others" /> Others
                            </label>
                        </div>

                        <label htmlFor="StaffDesig">Designation:</label>
                        <input type="text" id="StaffDesig" name="designation" required />

                        <label htmlFor="Stafftype">Employment Type:</label>
                        <select id="Stafftype" name="employmentType" required>
                            <option value="" disabled>Select Employment Type</option>
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                        </select>
                        <label htmlFor="StaffPassword">Password:</label>
                        <input type="password" id="StaffPassword" name="password" required />

                        <div className="StaffSubmit">
                        <a href="/staff">
                    <button type="button">
                        Submit
                    </button>
                    </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStaff;
