import React from "react";
import {useState} from "react";

function Poem({poem}) {
  const [read, setRead] = useState(false);
  const {id, title, content, author} = poem;
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={()=> {setRead(!read)}}>Mark as {read ? "unread" : "read"}</button>
    </div>
  );
}

export default Poem;
