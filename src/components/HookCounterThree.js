import React, { useState } from "react";

//useState with object
function HookCounterThree() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        //...name will take the previous value
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>firstName: {name.firstName}</h3>
      <h3>lastName: {name.lastName}</h3>
    </form>
  );
}

export default HookCounterThree;
