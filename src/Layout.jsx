import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />{/*jha bhi outlet doge vha chize change hogi i.e header footer same rhngi bich ka changehogi*/}
      <Footer />
    </>
  )
}

export default Layout