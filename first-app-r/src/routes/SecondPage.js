import React from "react";
import { useLocation } from "react-router-dom";

function SecondPage() {
  const loc = useLocation();
  const { title, desc, imageUrl, year, type } = loc.state;
  return (
    <div style={{ paddingTop: "50px", paddingLeft: "50px" }}>
      <div className="row">
        <img src={imageUrl} />
        <div
          style={{
            paddingLeft: "50px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <strong>Title :</strong> {title}
          </p>
          <p>
            <strong>Description :</strong> {desc}
          </p>
          <p>
            <strong>Year :</strong> {year}
          </p>
          <p>
            <strong>Type :</strong> {type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
