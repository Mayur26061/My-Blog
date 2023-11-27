import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
// import Test from './Test';
import { Test } from './Test';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
