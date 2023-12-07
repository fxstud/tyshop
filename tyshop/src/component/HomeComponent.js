import React from "react";
import Title from "./TitleComponent";
import ProductList from './ProductListComponent'
import PrincipalHomeComponent from './PrincipalHomeComponent'

function Home(props){
    return(
        <div className="container">
            <PrincipalHomeComponent></PrincipalHomeComponent>
            <Title name={'our'} title={'products'} />            
            <ProductList lesProduits = {props.lesProduits} addToCart = {props.addToCart}></ProductList>
            
        </div>
    )
}

export default Home