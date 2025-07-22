import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ margin: '0 8px', padding: '8px 12px' }}>
      {children}
    </button>
  );
}

export default Button;
