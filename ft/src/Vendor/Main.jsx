import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vendor_Header from "./Vendor_Header"
const Main = () => {
  return (
    <div>
       <Header/>
       <Routes>
          <Route exact path="/additem"  element={<AddItem/>}/>
          <Route exact path="/youritems"  element={<YourItems/>}/>
          <Route exact path="/transection"  element={<Transection/>}/>
        </Routes>
    </div>
  )
}

export default Main