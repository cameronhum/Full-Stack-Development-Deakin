import logo from './logo.svg';
import './App.css';
import Navbar from './Components/nav.js';
import Content from './Components/content.js';
import Footer from './Components/footer.js';


function App() {
  return (
      <div className="App">
          <Navbar />
          <Content />
          <Footer />
    </div>
  );
}

export default App;
