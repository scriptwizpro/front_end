import { useState } from 'react';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const toggleLogedIn = () => {
    setIsLogedIn(!isLogedIn);
  };

  return (
    <div className="App">
      <h1>{isLogedIn ? 'Welcome back!' : 'Please log in'}</h1>
      <button onClick={toggleLogedIn}>{isLogedIn ? 'Log out' : 'Log in'}</button>
    </div>
  );
  }

  export default App;