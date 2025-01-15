import { useState } from "react"

// const App = () => {
//   const todos = [{
//     title: "Go to gym",
//     done: true
//   }, {
//     title: "Eat food",
//     done: false
//   }];

//   const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

//   return (
//     <div>
//       {todosComponent}
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      {[
        <Todo key={1} title={"Go to gym"} done = {false} />,
        <Todo key={2} title={"Eat Healthy"} done = {true} />
      ]}
    </div>
  );
};

function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done" : "Not done"}
  </div>
}

// function App() {
//   // const [showTimer, setShowTimer] = useState(true);

//   return <div style={{display: "flex"}}>
//     <Card>
//       {<div style={{color: "green"}}>
//         What's up <br/> <br/>
//         <input type={"text"} />
//       </div>}
//     </Card>
//     <Card>
//       Heyyy!!!
//     </Card>
//   </div>
// }

// function Card( {children} ) {
//   return <div style={{background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
//     {children}
//   </div>
// }

export default App
