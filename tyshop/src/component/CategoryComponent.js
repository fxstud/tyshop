import react from 'react'
import Title from './TitleComponent'
import ProductList from './ProductListComponent'

export default function Category(props){
    return(
        <div className='container'>
            <Title name='categorie' title={props.name}></Title>
            <ProductList lesProduits = {props.lesProduits} addToCart = {props.addToCart} ></ProductList>
        </div>
    )
}