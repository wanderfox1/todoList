import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Components/Post/todoSlice.ts'

export const store = configureStore({
    reducer: {
        posts : todoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;