import { useState } from "react";

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }}/>
      <div>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {(time !== undefined) ? <div style={{display: 'flex'}}>
          <div>{time}</div>
          <img src={"https://img.icons8.com/ios-glyphs/30/000000/clock--v1.png"} style={{width: 12, height: 12}}></img>
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}}>
      {description}
    </div>
  </div>
}

function Post() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}


export default Post