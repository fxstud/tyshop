import React from 'react'

import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './HeaderComponent'
import Contact from './ContactComponent'
import Home from './HomCompConst'
import Cart from './CartCompConst'
import ProductDetail from './ProductDetailComponent'
import {addToCart,removeToCart,addQuantity,removeQuantity} from '../redux/ActionCreator'
import Category from './CategoryComponent'

const mapStateToProps = state =>{
    return{
        lesProduits : state.Products,
        lesProduitsInCart : state.Cart,
        category : state.storeCategory,
    }
}

const mapDispatchToProps = dispatch => ({
    addToCart : (product) => dispatch(addToCart(product)),
    removeToCart : (id) => dispatch(removeToCart(id)),
    addQuantity : (id) => dispatch(addQuantity(id)),
    removeQuantity : (id) => dispatch(removeQuantity(id))
})


class Main extends React.Component{
    
    render(){

        //console.log(this.props.lesProduits.lesProduits)
        const ProductWithId = () => {
            const {pId} = useParams();    
            return(                
                <ProductDetail produit = {this.props.lesProduits.lesProduits.filter( p => p.id === parseInt(Number(pId)))[0]} addToCart = {this.props.addToCart}></ProductDetail>
            )
        }

        const CategoryWithId = () => {
            const {cId} = useParams();    
            return(                
                <Category lesProduits = {this.props.lesProduits.lesProduits.filter( p => p.category_id === parseInt(Number(cId)))} addToCart = {this.props.addToCart}
                    name = {this.props.category.filter( c => c.id === parseInt(Number(cId)))[0].name}></Category>
            )
        }

        return(         
            <>
                <Header nbProduit = {this.props.lesProduitsInCart.nbProduit} />
                <Routes>
                    <Route  exact path='/home' element={<Home></Home>} ></Route>
                    <Route  path='/home/:pId' Component={ProductWithId}></Route>
                    <Route  exact path='/contact' element={<Contact></Contact>}></Route>
                    <Route  exact path='/cart' element={<Cart></Cart>}></Route>
                    <Route  exact path='/category/:cId' Component={CategoryWithId}></Route>
                    <Route exact path='*' element={<Navigate to='/home'></Navigate>} ></Route>
                </Routes>               
            </>
        )

    }
           
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)