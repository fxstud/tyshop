import {storeProducts} from '../shared/data'
import * as ActionType from './ActionTypes'

export const Products = (state = {lesProduits : storeProducts},action) => {
    switch(action.type){
        default:
            return state
    }
}