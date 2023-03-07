import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/Navigation/NavBar";
import About from './components/Home/About';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/about' element={<About />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
