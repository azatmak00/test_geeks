import React from "react";

const PokemonCard = ({ name, image }) => (
  <div
    style={{
      backgroundColor: "#addcf6",
      borderRadius: "12px",
      padding: "15px",
      width: "200px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
    }}
  >
    <img src={image} alt={name} style={{ width: "50px", height: "50px" }} />
    <h3 style={{ margin: 0, textTransform: "capitalize", color: "#182b3a" }}>
      {name}
    </h3>
  </div>
);

export default PokemonCard;
