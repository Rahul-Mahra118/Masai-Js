import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export const Search = () => {
  const [date, setDate] = useState("");
  let ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/intensity/${date}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>CarbonTrack – UK Electricity Intensity Viewer</h1>
      <input
        type="date"
        ref={ref}
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          width: "200px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};
