import { useState } from 'react'
import './App.css'
import NavbarLayout from './layout/navbar/NavbarLayout'
import SidebarLayout from './layout/sidebar/SidebarLayout'
import MainLayout from './layout/main/MainLayout'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <NavbarLayout toggleSidebar={() => setIsOpen(!isOpen)}></NavbarLayout>
      <SidebarLayout isOpen={isOpen} handleClose={handleClose}></SidebarLayout>
      <MainLayout isOpen={isOpen}></MainLayout>
    </>
  )
}

export default App
