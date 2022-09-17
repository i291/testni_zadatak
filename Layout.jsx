import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"
export const Layout=({children})=> {
  return (
<React.Fragment>
<Navbar/>
<div className="columns mt-6" style={{minHeight:"100vh"}}>
    <div className="columns is-2"><Sidebar></Sidebar></div>
    <div className="columns has-background-light"></div>
    <main>{children}</main>
</div>
</React.Fragment>
    )
}
export default Layout
