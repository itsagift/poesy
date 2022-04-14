import React from "react";
import {useState} from "react";

function NewPoemForm({setPoems}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  

  async function handleSubmit(event){
    event.preventDefault();
    console.log(title)
    console.log(content)
    let req = await fetch('http://localhost:8004/poems', {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title,
      content: content, 
      author: author
    })
    })
    let res = await req.json()
    console.log("Submitted poem")
  }

  

  return (
    <form className="new-poem-form">
      <input placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
      <input placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(e) => {setContent(e.target.value)}}/>
      <input type="submit" value="Share your masterpiece" onClick={handleSubmit}/>
    </form>
  );
}

export default NewPoemForm;
