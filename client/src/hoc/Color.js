import React from 'react';

const Color = (WrappedComponent) => {
  const colours = ['red', 'yellow', 'orange', 'green', 'blue', 'pink'];
  const randomColour = colours[Math.floor(Math.random() * 4)];
  const className = randomColour + '-text';
  console.log(className);
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};
export default Color;
