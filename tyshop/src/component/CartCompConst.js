import React from 'react'
import {connect} from 'react-redux'
import Cart from './CartComponent'

const mapStateToProps = state =>{
    return{
        lesProduitsInCart : state.Cart 
    }
}

class CartCompConst extends React.Component{
    render(){
        return(
            <Cart lesProduitsInCart = {this.props.lesProduitsInCart.lesProduitsInCart}></Cart>
        )
    }   
}

export default connect(mapStateToProps)(CartCompConst)