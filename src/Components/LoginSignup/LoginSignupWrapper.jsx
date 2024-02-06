import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const LoginSignupWrapper = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleToggle = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <div>
      {showLogin ? (
        <Login onClose={() => setShowLogin(false)} onToggle={handleToggle} />
      ) : (
        <SignUp onToggle={handleToggle} />
      )}

      
     
    </div>
  );
};

export default LoginSignupWrapper;
