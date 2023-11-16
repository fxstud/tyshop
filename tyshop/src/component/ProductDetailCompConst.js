import React from 'react'
import {connect} from 'react-redux'
import ProductDetail from './ProductDetailComponent'
import {Link,useParams} from 'react-router-dom'

const mapStateToProps = state =>{
    return{
        lesProduits : state.Products
    }
}



class ProductDetailCompConst extends React.Component{
    render(){
        
        const productWithId = ({match}) => {
            return(
                <ProductDetail produit = {this.props.lesProduits.lesProduits.filter( p => p.id === parseInt(match.params.pId))[0]}></ProductDetail>
            )
        }
        return(
            productWithId
        )
    }   
}

export default connect(mapStateToProps)(ProductDetailCompConst)