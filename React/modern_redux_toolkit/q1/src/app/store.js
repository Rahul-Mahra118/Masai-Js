import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/CartSlice/cartSlice'

export const store= configureStore({
    reducer:{
        cart:cartReducer
    }
})