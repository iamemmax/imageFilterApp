import './App.scss';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbar from './component/Navbar';
// import Search from './component/Search';
import { NotFound } from './component/NotFound';
import Home from './pages/Home';
import Single from './pages/Single';
import Tags from './pages/Tags';

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
                <Route path="/:id" element={<Single />}/>
                <Route path="/search/:tag" element={<Tags />}/> 
                {/* <Route path="/search/:query" element={<Search />}/>  */}
                <Route path="*" element={<NotFound/>}/>
                
            </Routes>
         </main>
        </Router>
    </div>
  );
}

export default App;
