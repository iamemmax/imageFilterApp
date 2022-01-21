import './App.scss';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbar from './component/Navbar';
import Home from './component/Home';
import Search from './component/Search';
import { NotFound } from './component/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
          
          <header>
          <Navbar />
          </header>
            
         <main>
         <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/search/:query" element={<Search />}/> 
                <Route path="*" element={<NotFound/>}/>
                
            </Routes>
         </main>
        </Router>
    </div>
  );
}

export default App;
