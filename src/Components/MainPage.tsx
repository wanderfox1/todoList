import arrowDown from '../assets/arrow_down.png'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, setFilter} from "./Post/todoSlice.ts";
import {createId} from "../utils/createId.ts";
import {RootState} from "../app/store.ts";
import {Post} from "./Post/Post.tsx";
import {Root} from "react-dom/client";

export const MainPage = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');

    const handleAdd = () => {
        if (name.trim()) {
            dispatch(addTodo({
                id: createId(),
                createdAt: new Date(),
                name: name,
                soon: false,
                done: false
            }))
        }

        setName('')
    }



    const todos = useSelector((state: RootState)=> state.posts.todos)
    const filter = useSelector((state: RootState) => state.posts.filter)

    const filteredTodos = todos.filter(todo => {
        if (filter === 'soon') {
            return todo.soon === true
        }
        if (filter === 'all') {
            return true
        }
        if (filter === 'done') {
            return todo.done === true
        }
        return false
    })


    return (
        <>
            <div className="my-20 mx-0">
                <div className="w-full flex items-center justify-center align-middle mb-5">
                    <button className="mr-4">
                        <img src={arrowDown} className="w-4 h-4" alt="Arrow down"/>
                    </button>
                    <input
                        placeholder="Write your to-do here"
                        className="w-200 border px-4 py-2 rounded-xl bg-pink-100 border-none hover:border-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="mx-10 bg-yellow-300 w-35 h-10 rounded-2xl" onClick={() => handleAdd()}>Создать</button>
                </div>

                <div className="w-[800px] mx-auto flex flex-col items-center">

                    {filteredTodos.map(todo => (
                        <Post key={todo.id} post={todo}/>
                    ))}
                </div>

                <div className="w-[600px]  flex justify-between items-center mx-auto gap-5 my-5">
                    <button onClick={() => dispatch(setFilter('all'))} className="border-gray-200 bg-orange-300 w-35 h-10 rounded-2xl">All</button>
                    <button onClick={() => dispatch(setFilter('soon'))} className="border-gray-200 bg-orange-300 w-35 h-10 rounded-2xl">Soon</button>
                    <button onClick={() => dispatch(setFilter('done'))} className="border-gray-200 bg-orange-300 w-35 h-10 rounded-2xl">Completed</button>
                </div>
            </div>
        </>
    )
}