import './App.css'
import Navbar from './components/Navbar'
import router from './routes/routeConfig'
import { RouterProvider } from 'react-router'
function App() {
  return (
    <>
      <Navbar/>
   <RouterProvider router={router} >
 
   </RouterProvider>
   
    </>
  )
}

export default App
