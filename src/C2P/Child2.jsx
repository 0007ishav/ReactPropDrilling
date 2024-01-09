import React from 'react';

const ChildComponent2 = (props) => {
  // Simulate some data in the child component
  const dataToSend = 'Hello from Child!';

  // Call the callback function to send data to the parent
  props.onDataReceived(dataToSend);

  return (
    <div>
      {/* Child component UI */}
    </div>
  );
};

export default ChildComponent2;
