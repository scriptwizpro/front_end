function App() {
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div className="App">
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;