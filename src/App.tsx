import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './pages/Frontend'
import Header from './components/features/Header'
import Backend from './pages/Backend'
import Deploy from './pages/Deploy'
import Projects from './pages/Projects'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Projects />}>
        </Route>
        <Route path='/front' element={<Frontend />}>
        </Route>
        <Route path='/back' element={<Backend />}>
        </Route>
        <Route path='/deploy' element={<Deploy />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
