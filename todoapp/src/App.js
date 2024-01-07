import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Learn React
        </a>
      </header>
    </div>
  );
}
function FirstComponent() {
  return (<div className="FirstComponent">First Component</div>); //whatever we return shd be in brackets
}
function SecondComponent(){
  return (<div>This is the second Component</div>);
}

function ThirdComponent(){
  return <div>This is my third component</div>
}

export default App;
