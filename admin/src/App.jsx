import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import Lists from './pages/Lists/Lists'
import Order from './pages/Orders/Orders'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
            <Sidebar />
              <Routes>
                <Route path="/add" element={<Add/>} />
                <Route path="/lists" element={<Lists/>} />
                <Route path="/order" element={<Order/>} />
              </Routes>
      </div>
    </div>
  )
}

export default App
