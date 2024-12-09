import {useState} from 'react';

function App() {
  const [text, setText] = useState('Click the button!');

  const handleClick = () => {
    setText('You clicked the button!');
  };

  return (
    <div className="App">
      <p>{text}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;