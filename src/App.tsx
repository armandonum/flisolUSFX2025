import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PrincipalFlisol from './components/principal/principalFlisol'
import Expositores from './components/expositores/expositores'
import Organizadoresq from './components/organizadores/organizadores'
import Colaboradores from './components/colaboradores/colaboradores'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      
     
        <>
          <PrincipalFlisol />
          < Expositores />
          <Organizadoresq />
          <Colaboradores />
        </>


  )
}

export default App
