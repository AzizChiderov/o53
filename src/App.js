import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Вynamicpage from './page/Вynamicpage/Вynamicpage.jsx'
import { CartProvider } from './context/CartContext';
import Basket from './page/basket/basket'
import { RouteProvider } from "./components/Header/nav/RouteContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <RouteProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index path='/' element={<Вynamicpage />} />
          </Route>
          <Route index path='/basket' element={<Basket />} />
        </Routes>
    </RouteProvider>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;