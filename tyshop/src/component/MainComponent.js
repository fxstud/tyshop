import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import {connect} from 'react-redux'



import Header from './HeaderComponent'
import Contact from './ContactComponent'
import Home from './HomeComponent'
import Cart from './CartComponent'

const mapStateToProps = state =>{
    return{
        lesProduits : state.Products
    }
}

class Main extends React.Component{
    render(){
        console.log(this.props.lesProduits.lesProduits)
        return(         
            <>
                <Header />
                <Routes>
                    <Route  path='/home' element={<Home></Home>}></Route>
                    <Route  path='/contact' element={<Contact></Contact>}></Route>
                    <Route  path='/cart' element={<Cart></Cart>}></Route>
                    <Route path='*' element={<Navigate to='/home'></Navigate>} ></Route>
                </Routes>               
            </>
        )

    }
           
}

export default connect(mapStateToProps)(Main)