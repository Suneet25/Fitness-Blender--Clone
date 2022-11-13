import logo from './logo.svg';
// import './App.css';
import './App.css';
import { Login } from './Components/Login';
import { LandingPage } from './Pages/LandingPage';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { NavBar } from './Components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <LandingPage/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
