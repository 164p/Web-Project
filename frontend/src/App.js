import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Item from "./pages/ItemList/ItemList"
import NavScroll from './components/Navbar'
import CreateItem from './pages/CreateItem/CreateItem'
import ItemDetail from './pages/ItemDetail/itemDetail'
import UpdateItem from './pages/UpdateItem/UpdateItem'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <NavScroll />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/profile" 
              element={<Profile />} 
            />
            <Route 
              path="/item" 
              element={<Item />} 
            />
            <Route 
              path="/create-item" 
              element={<CreateItem/>} 
            />
            <Route 
              path="/show-item/:id" 
              element={<ItemDetail/>} 
            />
            <Route 
              path="/edit-item/:id" 
              element={<UpdateItem/>} 
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
