// import { useState, useEffect } from "react"

function App() {
  // const [showTimer, setShowTimer] = useState(true);

  return <div style={{display: "flex"}}>
    <Card>
      {<div style={{color: "green"}}>
        What's up <br/> <br/>
        <input type={"text"} />
      </div>}
    </Card>
    <Card>
      Heyyy!!!
    </Card>
  </div>
}

function Card( {children} ) {
  return <div style={{background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
    {children}
  </div>
}

export default App
