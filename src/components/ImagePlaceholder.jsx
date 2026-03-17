import React from 'react';

const ImagePlaceholder = ({ label, dark = true, className = "" }) => (
  <div
    className={`flex items-center justify-center ${className}`}
    style={{ background: dark ? "#1A1A1A" : "#CCCCCC" }}
  >
    <span style={{
      color: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
      fontSize: "11px",
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0.5px"
    }}>
      {label}
    </span>
  </div>
);

export default ImagePlaceholder;
