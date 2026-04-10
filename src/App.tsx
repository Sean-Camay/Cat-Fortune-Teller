import { Routes, Route } from 'react-router-dom'
import { MainView } from './Views/Main-View'
import { SettingsView } from './Views/Settings-View'
import { SavedFortunesView } from './Views/Saved-Fortunes-View'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/settings' element={<SettingsView />} />
        <Route path='/saved-fortunes' element={<SavedFortunesView />} />
      </Routes>
    </>
  )
}

export default App
