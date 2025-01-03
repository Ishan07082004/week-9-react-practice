import { useState } from "react"

function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  )
}














// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

// function PostComponent() {
//   return <div style={style}> 
//     <div style={{display: "flex"}}>
//       <img src={"https://media.licdn.com/dms/image/v2/D5622AQEX9jHPyZTzRg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726419400449?e=1738800000&v=beta&t=8zr5NFTOYCSTl-ezonjsHUqGDjq58YGbdEbn3b6ricY"} style={{
//         width: 20,
//         height: 20,
//         borderRadius: 20
//       }} />
//       <div style={{frontSize: 10, marginLeft: 10}}>
//         <b>
//           Ishan Verma
//         </b>
//         <div>990 followers</div>
//         <div>3min</div>
//       </div>
//     </div>
//     <div style={{frontSize: 12}}>
//     Heyyyy guys, My name is ishan and i am currently working on MERN stack projects
//     </div>
//   </div>
// }

// write the assignment
// make the profileCard Component function
// function ProfileCard() {
//   return <div></div>
// }

export default App
