import React from 'react'
import {connect} from 'react-redux'
import Cart from './CartComponent'
import { removeToCart,addQuantity,removeQuantity } from '../redux/ActionCreator'

const mapStateToProps = state =>{
    return{
        lesProduitsInCart : state.Cart 
    }
}

const mapDispatchToProps = dispatch => ({
    removeToCart : (id) => dispatch(removeToCart(id)),
    addQuantity : (id) => dispatch(addQuantity(id)),
    removeQuantity : (id) => dispatch(removeQuantity(id))
})

class CartCompConst extends React.Component{
    render(){
        return(
            <Cart lesProduitsInCart = {this.props.lesProduitsInCart.lesProduitsInCart} 
                removeToCart = {this.props.removeToCart} removeQuantity = {this.props.removeQuantity} addQuantity = {this.props.addQuantity}></Cart>
        )
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCompConst)