import {createSlice} from '@reduxjs/toolkit'

interface PostSlice {
    value: 0;
}

const initialState : PostSlice = {
    value: 0,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
})

export default postSlice.reducer;