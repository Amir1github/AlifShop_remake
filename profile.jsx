import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from '../main_page/navbar/navbar.jsx'
import '../index.css'
import Profile_info from './profile_info.jsx'
import Footer from '../main_page/footer.jsx'
function Main_page() {
  
  return (
    <>
      <Navbar />

        <Profile_info />
        <Footer />
    </>
  )
}
export default function renderProfilePage() {
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main_page />
  </StrictMode>,
)
}