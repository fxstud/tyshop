import { legacy_createStore as createStore,combineReducers,applyMiddleware } from 'redux'
import { Products } from './Product'
import { Cart } from './Cart'
import {Category} from './Category'

import thunk from 'redux-thunk'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Products : Products,
            Cart  : Cart,
            storeCategory : Category
        }),
        applyMiddleware(thunk)

    );

    return store;
}