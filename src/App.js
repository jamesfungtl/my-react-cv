// import logo from './logo.svg';
import './App.scss';
import "./styles/main.scss";
import "./styles/responsive.scss";
import ProfileSummary from "./components/ProfileSummary";
import TechnicalWorkingExperiences from "./components/TechnicalWorkingExperiences";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
        <div className="main-wrapper">
          <ProfileSummary />
          <TechnicalWorkingExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
