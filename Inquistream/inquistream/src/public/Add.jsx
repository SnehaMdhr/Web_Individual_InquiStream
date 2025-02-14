import React from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import newlog from "../assets/image/newlog.png"

const Add = () => {
    const navigate = useNavigate();


    return (
        <>
            <div>
                  <div className="header">
                    <div className="logon">
                      <a href="./dashboard"><img className="logo" src={newlog}></img></a>
                    </div>
                    <div className="Logout">
                      <button onClick={() => window.location.href = './login'}>
                        <i className="fa-solid fa-right-from-bracket"></i>Logout
                      </button>
                    </div>
                  </div>
            
                  <div className="navbar">
                    <ul>
                      <li><a href="./dashboard"><i className="fa-solid fa-house"></i> Home</a></li>
                      <li><a href="./add"><i className="fa-solid fa-user-plus"></i>Add Inquiry</a></li>
                      <li><a href="./list"><i className="fa-solid fa-list"></i>Inquiry List</a></li>
                      <li><a href="./enroll"><i className="fa-solid fa-users"></i>Enrolled</a></li>
                      <li><a href="./staff"><i className="fa-solid fa-user-tie"></i>Staff</a></li>
                    </ul>
                  </div>
            </div>

            <div className="container">
                <h1>Inquiry Form</h1>
                <div className="form-container">
                    <form>
                        <h2>Personal Details</h2>

                        <label className="InqName">Name:</label>
                        <input type="text" id="InqName" />

                        <label className="InqEmail">Email:</label>
                        <input type="email" id="InqEmail" />

                        <label className="InqDob">Date of Birth:</label>
                        <input type="date" id="InqDob" />

                        <label className="Inqage">Age:</label>
                        <input type="number" id="Inqage" max="100" min="14" />

                        <label className="InqPaddress">Permanent Address:</label>
                        <input type="text" id="InqPaddress" />

                        <label className="InqTAddress">Temporary Address:</label>
                        <input type="text" id="InqTAddress" />

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
                        <label>Marital Status:</label>
                        <div className="marital-group">
                            <label className="InqMarried">
                                <input type="radio" id="InqMarried" name="Marital" value="Married" /> Married
                            </label>
                            <label className="InqUnMarried">
                                <input type="radio" id="InqUnMarried" name="Marital" value="Unmarried" /> Unmarried
                            </label>
                        </div>

                        <h2>Academic Qualification:</h2>
                        <table className="Academics">
                            <thead>
                                <tr>
                                    <th>Degree Obtained</th>
                                    <th>Major</th>
                                    <th>Institution</th>
                                    <th>Score/GPA</th>
                                    <th>Passed Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {["SLC / SEE", "10+2/CTEVT/PCL", "Bachelor", "Master"].map((degree, index) => (
                                    <tr key={index}>
                                        <td>{degree}</td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h2>Work Experience (If Any)</h2>
                        <input type="text" id="Inqworkexp" />

                        <h2>Country of your interest:</h2>
                        <div className="checkbox-group">
                            {["Australia", "Canada", "United Kingdom", "United States", "Ireland"].map((country) => (
                                <label key={country}>
                                    <input type="checkbox" name="countries" value={country} /> {country}
                                </label>
                            ))}
                        </div>
                        <label>Others:</label>
                        <input type="text" id="InqCouOthers" />

                        <h2>Have you taken any of the following tests?</h2>
                        <div className="ielts-section">
                            <div className="checkbox-group">
                                {["PTE", "IELTS", "TOEFL", "Other"].map((test) => (
                                    <label key={test}>
                                        <input type="checkbox" name="tests" value={test} /> {test}
                                    </label>
                                ))}
                            </div>

                            <div className="scores-table">
                                <h2>Score</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Listening</th>
                                            <th>Writing</th>
                                            <th>Reading</th>
                                            <th>Speaking</th>
                                            <th>Overall</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {["listening", "writing", "reading", "speaking", "overall"].map((field) => (
                                                <td key={field}><input type="text" id={field} placeholder={field} /></td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="reference">
                            <label className="Inqref">How did you know about us?</label>
                            <input type="text" id="Inqref" />
                        </div>
                        <div className="InqConfirmation">
                        <label className="InqConfirmation">
                            <input type="checkbox" id="InqConfirmation" />
                            I have provided accurate information.
                        </label>
                        </div>

                        <div className="InqSubmit">
                        <a href="/list">
                    <button type="button">
                        Submit
                    </button>
                    </a>
                        </div>
                       
                    </form>
                </div>
            </div>
        </>
    );
};

export default Add;
