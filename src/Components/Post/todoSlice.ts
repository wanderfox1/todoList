import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Post} from './post.types.ts'

interface todoSlice {
    todos: Post[];
}

const initialState : todoSlice = {
    todos: [],
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
        // filterDones : (state) => {
        //
        // }

    },
})

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;