import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { LandingPage } from './Pages/LandingPage';
import { AllRoutes } from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
