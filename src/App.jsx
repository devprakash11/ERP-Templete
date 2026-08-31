import './styles/globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import mainRoutes from './routes/AppRoutes'

function App() {
  const router = createBrowserRouter(mainRoutes)

  return <RouterProvider router={router} />
}

export default App