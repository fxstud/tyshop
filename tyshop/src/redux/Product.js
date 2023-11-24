import {storeProducts} from '../shared/data'
import * as ActionType from './ActionTypes'

export const Products = (state = {lesProduits : storeProducts},action) => {
    switch(action.type){
        case ActionType.ADD_TO_CART:
            return {...state,lesProduits : state.lesProduits.map(p => p === action.payload.product ? {...p,inCart : true} : p)}
        case ActionType.REMOVE_TO_CART:
            return {...state,lesProduits : state.lesProduits.map(p => p.id === action.payload.id ? {...p,inCart : false} : p)}
        default:
            return state
    }
}