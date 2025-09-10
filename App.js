import React from "react";

// თქვენი ძველი ტასკები
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";

// ახალი ტასკი – წარსული შეკვეთები
import PreviousOrders from "./tasks/PreviousOrders";

function App() {
  return (
    <div>
      <h1>React Project – 10 Tasks</h1>
      
      {/* ძველი ტასკები */}
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />

      <hr />

      {/* ახალი ტასკი – წარსული შეკვეთები */}
      <PreviousOrders />
    </div>
  );
}

export default App;
