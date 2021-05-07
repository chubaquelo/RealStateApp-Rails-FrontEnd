import { BrowserRouter as Router } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Router>
        <header>
          <SideBar />
        </header>
      </Router>
    </div>
  );
}

export default App;
