import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, desc, imageUrl, year, type }) => {
  return (
    <Link to="/second_page" state={{ title, desc, imageUrl, year, type }}>
      <div style={{ width: "350px", marginLeft: "20px", marginBottom: "20px" }}>
        <img
          style={{
            width: "350px",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
          }}
          src={imageUrl}
          alt="abc"
        />
        <div className="card-body" style={{ width: "350px" }}>
          <h5 className="card-title">{title}</h5>
          <h6>Movie Sub Title</h6>
          <p className="card-text text-justify">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
