import React from 'react'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'




import Header from './HeaderComponent'
import Contact from './ContactComponent'
import Home from './HomeComponent'
import Cart from './CartComponent'

function Main(){

    return(         
        <>
            <Header />
            <Routes>
                <Route  path='/home' element={<Home></Home>}></Route>
                <Route  path='/contact' element={<Contact></Contact>}></Route>
                <Route  path='/cart' element={<Cart></Cart>}></Route>
                <Route path='*' element={<Navigate to='/contact'></Navigate>} ></Route>
                </Routes>               
        </>
    )
}

export default Main 