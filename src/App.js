// import logo from './logo.svg';
import './App.scss';
import "./styles/main.scss";
import ProfileSummary from "./components/ProfileSummary";
import TechnicalWorkingExperiences from "./components/TechnicalWorkingExperiences";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-wrapper">
          <ProfileSummary />
          <TechnicalWorkingExperiences />
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
