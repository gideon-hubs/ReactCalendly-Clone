import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Individuals from './pages/Individuals';
import Teams from './pages/Teams';
import Enterprise from './pages/Enterprise';

function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
    <div class="container-fluid sticky-top sticky">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid mt-3">
                  <Link class="navbar-brand ml-lg-5" href="#"><img src="" alt=""/><img src="./images/logo.png" alt="" class="img-fluid"/></Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-5 mb-2 mb-lg-0">
                      <li class="nav-item">
                      <Link class="nav-link text-dark fs-5 mx-md-4"  to={"/"}><strong> Home </strong></Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link text-dark fs-5 mx-md-4"  to={"/individuals"}><strong> Individuals </strong></Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link text-dark fs-5 mx-md-4"  to={"/teams"}><strong> Teams </strong></Link>
                      </li>
                      
                      <li class="nav-item">
                        <Link class="nav-link text-dark fs-5 mx-md-4"  to={"/enterprise"}><strong> Enterprise </strong></Link>
                      </li>
                    </ul>
                    
                  </div>
                </div>
            </nav>
        </div>
        
    </div>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/individuals' element={<Individuals/>}/>
    <Route path='/teams' element={<Teams/>}/>
    <Route path='/enterprise' element={<Enterprise/>}/>
    </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;
