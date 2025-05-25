import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Post} from './post.types.ts'

interface todoSlice {
    todos: Post[],
    filter: 'all' | 'soon' | 'done' // union type
}

const initialState : todoSlice = {
    todos: [],
    filter: 'all'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Post>) => {
            state.todos.push(action.payload)
        },
        removeTodo : (state, action: PayloadAction<Pick<Post, 'id'>>) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id)
        },
        toggleComplete : (state, action: PayloadAction<Pick<Post, 'id' | 'done'>>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.done = !todo.done;
            }
        },
        toggleSoon: (state, action: PayloadAction<Pick<Post, 'id' | 'soon'>>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.soon = !todo.soon
            }
        },
        clearAll: (state) => {
            state.todos = []
        },
        setFilter: (state, action: PayloadAction<'all' | 'soon' | 'done'>) => {
            state.filter = action.payload
        },

    },
})

export const {addTodo, removeTodo, toggleComplete, toggleSoon, setFilter, clearAll} = todoSlice.actions;
export default todoSlice.reducer;