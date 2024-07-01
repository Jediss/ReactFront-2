import React, { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Magazyn from './pages/Magazyn';
import Towary from './pages/Towary';
import Zadania from './pages/Zadania';
import Zamowienia from './pages/Zamowienia';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements
  (
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/Magazyn" element={<Magazyn />}/>
      <Route path="/Towary" element={<Towary />}/>
      <Route path="/Zadania" element={<Zadania />}/>
      <Route path="/Zamowienia" element={<Zamowienia />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router = {router} />
  );
}

export default App
