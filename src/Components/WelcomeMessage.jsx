import React from 'react';

const WelcomeMessage = ({ isLoggedIn, name }) => {
  return (
    <p>
      {isLoggedIn ? `Hello, ${name}!` : 'Please login'}
    </p>
  );
};

export default WelcomeMessage;