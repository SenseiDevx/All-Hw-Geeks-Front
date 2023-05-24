import React, { useState } from "react";

function App() {
  const [square1Color, setSquare1Color] = useState("red");
  const [square2Color, setSquare2Color] = useState("blue");

  const handleSquare1Click = () => {
    setSquare1Color(square2Color);
    setSquare2Color(square1Color);
  };

  const handleSquare2Click = () => {
    setSquare2Color(square1Color);
    setSquare1Color(square2Color);
  };

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: square1Color
        }}
        onClick={handleSquare1Click}
      />
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: square2Color
        }}
        onClick={handleSquare2Click}
      />
    </div>
  );
}

export default App;
