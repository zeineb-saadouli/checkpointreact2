// src/PlayersList.js

import React from "react";
import Player from "./player";
import players from "./players";

const PlayersList = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
