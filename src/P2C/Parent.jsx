import React from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  // Data to be passed to child component
  const messageToChild = 'Hello from Parent!';

  return (
    <div>
      {/* Pass data to ChildComponent as a prop */}
      <ChildComponent message={messageToChild} />
    </div>
  );
};

export default ParentComponent;
