import logo from './logo.svg';
import './App.css';
import Navbar from './Components/nav.js';
import Content from './Components/content.js';
import Footer from './Components/footer.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import SignupWithNavigate from './Components/SignupPage.js';
import LoginWithNavigate from './Components/Login.js';



function App() {
  return (
      <div className="App">
          <Router>
          <Navbar />          
              <Routes>
                <Route exact path='/' element={< Content />}></Route>
                <Route exact path='/signup' element={< SignupWithNavigate />}></Route>
                <Route exact path='/login' element={< LoginWithNavigate />}></Route>
            </Routes>
          </Router>

          <Footer />
    </div>
  );
}

export default App;
