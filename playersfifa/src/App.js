import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import PlayersList from "./playersList";

function App() {
  return (
    <div className="App">
      <h1>FIFA Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
