import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutRouter from './layouts/layoutRouter';
import Erreur from './components/Erreur';
import PublicRouter from './layoutsPublic/PublicRouter';
function App() {
  return (
    <div className="App" style={{}}>
        <BrowserRouter>
            <Routes>
                <Route path='/admin/*' element={<LayoutRouter/>}  />
                <Route path='/*' element={<PublicRouter/>}  />
                <Route path='*' element={<Erreur/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
