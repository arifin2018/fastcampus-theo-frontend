import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route } from "react-router";
import Home from './pages/Home';
import Header from './components/pribadi/Header';
import Footer from './components/pribadi/Footer';
import NotFound from './pages/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header className="h-14 border-b-4">
        <Header/>
      </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <footer className="h-14 border-t-4 flex items-center justify-between font-bold px-10 mt-10">
          <Footer/>
      </footer>
    </BrowserRouter>
  </StrictMode>,
)
