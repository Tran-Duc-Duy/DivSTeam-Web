'use client'
import Image from 'next/image'
import Home from './home/page'
import Services from './services/page'
import About from './about/page'
import Work from './work/page'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import { useEffect } from 'react'

export default function App() {

    useEffect(() => {
      window.history.scrollRestoration = 'manual'
    }, []);
  return (
    <main>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Work />
      <Footer />
    </main>
  )
}
