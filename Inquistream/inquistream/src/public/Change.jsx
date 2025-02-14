import React from "react";
import { useNavigate } from "react-router-dom";
import "./Change.css";

const Change = () => {
    const navigate = useNavigate();

    return (
        <div className="background">
            <div className="Ucont">
                
                {/* Top Button Centered */}
                <div className="TopButton">
                    <div className="UAddRem">
                        <button type="button" onClick={() => navigate("/AddRem")}>
                            Add Remarks
                        </button>
                    </div>
                </div>

                {/* Bottom Buttons Side by Side */}
                <div className="BottomButtons">
                    <div className="UviewRem">
                        <button type="button" onClick={() => navigate("/viewRem")}>
                            View Remarks
                        </button>
                    </div>
                    <div className="UEnroll">
                        <button type="button" onClick={() => navigate("/enroll")}>
                            Enroll
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Change;
