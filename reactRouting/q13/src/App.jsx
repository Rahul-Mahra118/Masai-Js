import './App.css'
import Navbar from './components/Navbar'
import router from './routes/routeConfig'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <>
  <Navbar/>
   <RouterProvider router={router} ></RouterProvider>
   
    </>
  )
}

export default App
