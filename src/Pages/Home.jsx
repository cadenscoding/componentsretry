import React from 'react';
// for button 
import { useNavigate } from 'react-router-dom';
import WelcomeMessage from '../Components/WelcomeMessage';



const Home = () => {
    const navigate = useNavigate(); 
//   function that holds the navigation
    const navigateMe = () => {
      navigate('/about'); 
    };
  
    return (
      <div>
        <h1>Home Page</h1>
        <WelcomeMessage isLoggedIn={false} />
  
        
        <button onClick={navigateMe}>Go to About Page</button>
      </div>
    );
  };

export default Home;