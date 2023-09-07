import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const greeting = "Bienvenido a la tienda"

  return (
    
     <div>
      <NavBar />
      <ItemListContainer greeting = {greeting} />
     </div>
    
  )
}

export default App
