import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  return (
    <div className="App">
      <h1>Hooks intro</h1>
      <input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
      <input value={lastName} placeholder="LastName" onChange={(e) => setLastName(e.target.value)}></input>
      <hr></hr>
      <span>Welcome, {name +" "+ lastName}</span>
    </div>
  );
}

export default App;
