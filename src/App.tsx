import React from 'react';
import { CSSProperties } from 'react';
import TypingRace from './TypingRace';

 const rootContainer: CSSProperties = {
   display: "flex",
   alignItems: "center",
   flexDirection: "column",
   justifyContent: "center",
   
   width: "100vw",
   height: "100vh",
   border: "1px solid black",
 };

function App() {
  return (
    <div style={rootContainer}>
      <TypingRace />
    </div>
  );
}

export default App;
