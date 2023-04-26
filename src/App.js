import React from "react";
import Card from "./Card";
import Emojis from "./Emojis";
import "./App.css";

function createCard(x) {
  return (
    <div>
      <Card
        emoji={x.emoji}
        title={x.title}
        description={x.description}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>EMOJIPEDIA</h1>
      <div className="main_box" > {Emojis.map(createCard)}</div>
    </div>
  );
}
export default App;
