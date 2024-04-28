import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutRouter from './layouts/layoutRouter';
import Erreur from './components/Erreur';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<LayoutRouter/>}  />
                <Route path='*' element={<Erreur/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
