import './App.scss';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Navbar from './component/Navbar';
// import Search from './component/Search';
import { NotFound } from './component/NotFound';
import Home from './pages/Home';
import Single from './pages/Single';
import Tags from './pages/Tags';
import Footer from './component/Footer';
import { Helmet } from 'react-helmet';
import favIcon from "./component/favicon.PNG"
function App() {
  return (
    <div className="App">
       <Helmet>
                <title>Homepage</title>
                <meta charset="utf-8" />
               <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Image gallery application" />
                <meta name="keyword" content="iamge, search latest popular landscape portriate" />
                <link rel="shortcut icon" href={favIcon} />

            </Helmet>
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

         <footer>
           <Footer />
         </footer>
        </Router>
    </div>
  );
}

export default App;
