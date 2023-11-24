import * as ActionType from './ActionTypes'

export const Cart = (state = {lesProduitsInCart : [] ,nbProduit : 0},action) => {
    switch(action.type){
        case ActionType.ADD_TO_CART :
            return {...state,lesProduitsInCart : state.lesProduitsInCart.concat(action.payload.product),nbProduit : state.nbProduit+1}
        case ActionType.REMOVE_TO_CART :
            return {...state,lesProduitsInCart : state.lesProduitsInCart.filter(p => p.id != action.payload.id),nbProduit : state.nbProduit-1}
        case ActionType.ADD_QUANTITY : 
            return {...state,lesProduitsInCart : state.lesProduitsInCart.map( p => p.id === action.payload.id ? {...p,count : p.count+1} : p)}   
        case ActionType.REMOVE_QUANTITY : 
            return {...state,lesProduitsInCart : state.lesProduitsInCart.map( p => p.id === action.payload.id ? {...p,count : p.count === 1 ? 1 : p.count-1 } : p)}       
        default:
            return state
    }
}