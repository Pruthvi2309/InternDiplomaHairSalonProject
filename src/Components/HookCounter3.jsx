import React, { useState } from 'react';

function HookCounter3() {
  // Using state with an object to store firstName, lastName, and Middlename
  const [name, setName] = useState({ firstName: '', lastName: '', Middlename: '' });

  return (
    <div>
      <form>
        {/* Input for firstName */}
        <input
          type="text"
          value={name.firstName}
          onChange={e1 => setName({ ...name, firstName: e1.target.value })}
        />
        {/* Input for lastName */}
        <input
          type="text"
          value={name.lastName}
          onChange={e1 => setName({ ...name, lastName: e1.target.value })}
        />
        {/* Input for Middlename */}
        <input
          type="text"
          value={name.Middlename}
          onChange={e1 => setName({ ...name, Middlename: e1.target.value })}
        />
        {/* Displaying the first name */}
        <h2>Your First Name is  - {name.firstName}</h2>
        {/* Displaying the last name */}
        <h2>Your Last Name is  - {name.lastName}</h2>
        {/* Displaying the middle name */}
        <h2>Your Middle Name is  - {name.Middlename}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
