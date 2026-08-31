import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import mainRoutes from './routes/AppRoutes'

function App() {
  return <BrowserRouter>{mainRoutes()}</BrowserRouter>
}

export default App
