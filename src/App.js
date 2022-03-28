import React from "react";
import "./style.css";
function HandlingEvents(){
  function handleClick(e){
    e.preventDefault();
    console.log("User was clicked");
  }
  return (
    <>
    <form>
      <button onClick={handleClick}>Submit</button>
    </form>
    </>
  );
}
export default function App() {
  return (
    <div>
      <HandlingEvents />
      <h1>Hello ,Handling Events</h1>
      <p>Hear we are able to change the user handling events :)</p>
    </div>
  );
}
