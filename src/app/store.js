import {configureStore} from '@reduxjs/toolkit';
import placeHolderReducer from './storeSlice';

export const store = configureStore({
    reducer: {
        'placeHolder': placeHolderReducer,
    }
    
})