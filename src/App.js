import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Header } from './customatizations/Header';
import { CatalogPage } from './pages/CatalogPage';


function App() {
  return (
    <BrowserRouter >
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
