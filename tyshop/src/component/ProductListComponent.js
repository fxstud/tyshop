import React from "react";
import Product from './ProductComponent'

export default class ProductList extends React.Component{
    constructor(props){
        super(props)
    }

    lesProducts(){
        if(this.props.lesProduits != null){
            const products = this.props.lesProduits.map( p => {
                return(<Product caracteristique = {p} addToCart = {this.props.addToCart}></Product>)
            })

            return(<div className="row">{products}</div>)
        }
        else{
            return(<p>null</p>)
        }
    }

    render(){
        return(<>{this.lesProducts()}</>)
    }
}