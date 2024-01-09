import React, { useState } from 'react';
import ChildComponent from './Child2';

const ParentComponent2 = () => {
  // State to store data from child component
  const [messageFromChild, setMessageFromChild] = useState('');

  // Callback function to receive data from child
  const handleChildData = (data) => {
    setMessageFromChild(data);
  };

  return (
    <div>
      {/* Pass callback function to ChildComponent as a prop */}
      <ChildComponent onDataReceived={handleChildData} />
      {/* Display data received from child */}
      <p>Data from Child: {messageFromChild}</p>
    </div>
  );
};

export default ParentComponent2;


// Child to Parent Communication (Callback Functions):

// In the example of child-to-parent communication, the child component
//  receives a callback function (onDataReceived) as a prop from the parent. 
//  The child then calls this callback function to send data back to the parent. 
//  This pattern allows for communication in both directions, providing a flexible 
//  way to handle data flow between components.