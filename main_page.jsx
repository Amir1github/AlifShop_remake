import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar/navbar.jsx'
import Main_content from './main_content/main_content.jsx'
import '../index.css'
import Footer from './footer.jsx'

function Main_page() {
  
  return (
    <>
      <Navbar />
      <Main_content />
      <Footer />
    </>
  )
}
export default function renderMainPage() {
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main_page />
  </StrictMode>,
)
}

