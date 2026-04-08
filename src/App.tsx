import { Routes, Route } from 'react-router-dom'
import { MainView } from './Views/Main-View'
import { SettingsView } from './Views/Settings-View'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/settings' element={<SettingsView />} />
      </Routes>
    </>
  )
}

export default App
