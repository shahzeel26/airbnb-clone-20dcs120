
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>

        
        <Route exact path='/search' element={<SearchPage />}/>
        <Route exact path='/' element={<Home />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
