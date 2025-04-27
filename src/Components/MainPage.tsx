import arrowDown from '../assets/arrow_down.png'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo} from "./Post/todoSlice.ts";
import {createId} from "../utils/createId.ts";
import {RootState} from "../app/store.ts";
import {Post} from "./Post/Post.tsx";

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

                <div className="flex flex-col items-center ">

                    {todos.map(todo => (
                        <Post key={todo.id} post={todo}/>
                    ))}
                </div>
            </div>
        </>
    )
}