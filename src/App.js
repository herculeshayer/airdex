// import logo from './logo.svg';
// import './App.css';
import HomePage from './pages/home';
import GetAQIInformation from './components/GetAQI';

import './styles/css/index.css';

const TESTENV = process.env.REACT_APP_AQI_TOKEN;

function App() {
  // console.log(TESTENV);
  return (
    <div>
      
      <HomePage />

    </div>
  );
}

export default App;
