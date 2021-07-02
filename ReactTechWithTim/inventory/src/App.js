import './App.css';
import Info from "./Info.js"

function App() {
  return (      // call the component (2 diferent methods)
    <div className="App">
        <Info></Info>     
        <Info />
        <Info />
        <AddItem text="blabla" number={2} />
        <AddItem text="Joe"/>
        <AddItem text="Test"/>
    </div>
  );
}

function AddItem({text, number = 99}) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={text} id="text-form">
      </input>
      <p>{number}</p>
      <Info />
    </form>
  )
}

export default App;
