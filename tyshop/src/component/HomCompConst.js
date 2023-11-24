import React from 'react'
import {connect} from 'react-redux'
import Home from './HomeComponent'
import {addToCart} from '../redux/ActionCreator'

const mapStateToProps = state =>{
    return{
        lesProduits : state.Products
    }
}

const mapDispatchToProps = dispatch => ({
    addToCart : (product) => dispatch(addToCart(product))
})

class HomCompConst extends React.Component{
    render(){
        return(
            <Home lesProduits = {this.props.lesProduits.lesProduits} addToCart = {this.props.addToCart}></Home>
        )
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(HomCompConst)