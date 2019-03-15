import React, { useState } from "react";

const Hooks = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <p>
        <b>Hooks</b>
      </p>
      <input type="text" onChange={e => setName(e.target.value)} />
      <p>Hello {name}!</p>
    </div>
  );
};

export default Hooks;
