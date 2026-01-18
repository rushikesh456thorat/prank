import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";

function Suk() {
  const [prn, setPrn] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleView = () => {
    if (!prn.trim()) {
      setError(true);
      return;
    }

    setError(false);
    navigate("/result");
  };

  return (
    <div className="container">
      <img className="image" src={image} alt="logo" />

      <div className="cont">
        <label style={{ fontSize: "16px" }}>
          University PRN <span style={{ color: "red" }}>*</span>
        </label>

        <input
          className={error ? "input error" : "input"}
          placeholder="Enter PRN"
          value={prn}
          onChange={(e) => {
            if (e.target.value.length <= 10) {
              setPrn(e.target.value);
            }
            setError(false);
          }}
        />

        <button className="but" onClick={handleView}>
          View
        </button>
      </div>

      {error && <p className="error-text">PRN is required</p>}
    </div>
  );
}

export default Suk;
