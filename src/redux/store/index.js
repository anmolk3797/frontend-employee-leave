import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import rootReducers from '../slices'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList : ["auth"]
}

export const persistedReducer = persistReducer(persistConfig, rootReducers)

export  const store = configureStore({
  reducer: persistedReducer,
   middleware: [thunk],
})

export const persistor = persistStore(store)

// const store = configureStore({
//   reducer: {
//     auth: authReducer
//   }
// })
// export default store