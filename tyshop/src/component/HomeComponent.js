import React from "react";
import Title from "./TitleComponent";
import ProductList from './ProductListComponent'

function Home(props){
    return(
        <div className="container">
            <Title name={'our'} title={'products'} />
            <ProductList lesProduits = {props.lesProduits} addToCart = {props.addToCart}></ProductList>
        </div>
    )
}

export default Home