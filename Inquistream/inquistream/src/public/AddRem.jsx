import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddRem.css";

const AddRem = () => {
    const navigate = useNavigate();

    const handleAddRemarks = () => {
        navigate("/viewRem");
    };

    return (
        <div className="background">
            <div className="cont">
                <div className="RemForm">
                    <input type="text" id="Addremarks" placeholder="Enter your remarks..." />
                    <div className="AddRem">
                        <button type="button" onClick={handleAddRemarks}>
                            Add Remarks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRem;
