import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/Home'
import useUserStore from './store/userStore'
import { useState, useEffect } from 'react'

function ProtectedRoute({ children }) {
  const { token } = useUserStore()
  if (!token) return <Navigate to="/" />
  return children
}

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Home dark={dark} setDark={setDark} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}