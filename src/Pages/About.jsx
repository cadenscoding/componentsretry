import React from 'react';
import WelcomeMessage from '../Components/WelcomeMessage';

const About = () => {
  const name = 'Friend';

  return (
    <div>
      <h1>About Page</h1>
      <WelcomeMessage isLoggedIn={true} name={name} />
    </div>
  );
};

export default About;