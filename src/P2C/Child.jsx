import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      {/* Access and display data passed from the parent */}
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;
