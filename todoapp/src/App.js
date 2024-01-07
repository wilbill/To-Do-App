import logo from "./logo.svg";
import "./App.css";
import { Component } from "react"; //import component from react

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
          <FourthComponent></FourthComponent>
          <FifthComponent></FifthComponent>
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
//Functional components
function FirstComponent() {
  return <div className="FirstComponent">First Component</div>; //whatever we return shd be in brackets
}
function SecondComponent() {
  return <div className="SecondComponent">This is the second Component</div>;
}

function ThirdComponent() {
  return <div className="ThirdComponent">This is my third component</div>;
}
//class components, shd have method/function called render
class FourthComponent extends Component {
  render() {
    return <div className="FourthComponent">This is my Fourth component</div>;
  }
}

class FifthComponent extends Component{
  render() {
    return <div className="FifthComponent">This is the fifth Component</div>;
  }
}

export default App;
