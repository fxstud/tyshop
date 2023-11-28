import React from "react";
import Title from "./TitleComponent";
import CartColumns from "./CartColumns";
import CartItem from "./CartItemComponent";
import CartTotal from "./CartTotalComponent.";

function Cart(props){
    if(props.lesProduitsInCart != null){
        var total = 0
        props.lesProduitsInCart.forEach(p => { p.promo === 0 ? total += p.price*p.count : total+= p.price*(100-p.promo)/100*p.count});

        return(
            <>
                <Title name={'votre'} title={'panier'} />
                <div className="container">
                    <div className="spaceCart">
                        {
                            props.lesProduitsInCart.length === 0 ?
                            <h1 className="text-center font-capitalize font-weight-bold">votre panier est vide pour le moment</h1>
                            :
                            <>
                                <CartColumns></CartColumns>
                                {props.lesProduitsInCart.map(p => <CartItem produit={p} removeToCart={props.removeToCart} removeQuantity = {props.removeQuantity} addQuantity = {props.addQuantity}></CartItem>)}
                                
                            </>
                        }

                    </div>
                    {props.lesProduitsInCart.length === 0 ? null : <CartTotal total = {total} ></CartTotal> }
                </div>
            </>                
        )
    }
    else{
        return(<div className="container text-center">cart is null</div>)
    }   
}

export default Cart