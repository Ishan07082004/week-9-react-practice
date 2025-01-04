// import React, { useState } from "react"; 

// UseState is a Hook that allows you to add React state to function components.

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// };

// function App() {
//   return (
//     <div style={{background: "#dfe6e9", height: "100vh"}}>
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// const ToggleMessage = () => {
//   let [notification, setNotification] = useState(0);
//   console.log("re-render");

//   function Increment() {
//     setNotification(notification + 1);
//   }

//   return (
//     <div>
//       <button>
//         Increase Count
//       </button>
//       {notificationCount}
//     </div>
//   )
// }

