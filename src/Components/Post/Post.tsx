import {Cancel, Done, Delete, Edit} from '../../assets'
import {PostProps} from './post.types.ts'
import {removeTodo, toggleComplete, toggleSoon} from "./todoSlice.ts";
import {useDispatch} from "react-redux";

export const Post = ({post}: PostProps) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(removeTodo({id: post.id}))
    }

    const handleToggleComplete = () => {
        dispatch(toggleComplete({id: post.id, done: post.done}))
    }

    const handleToggleSoon = () => {
        dispatch(toggleSoon({id: post.id, soon: post.soon}))
    }

    return (
        <>
            <div
                className="flex justify-center items-center my-2 gap-9 p-4 w-full bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-lg font-semibold">{post.name}</div>
                <div className="text-sm text-gray-500">{post.createdAt.toLocaleDateString()}</div>

                <button onClick={() => handleToggleSoon()}>
                    <div className={`text-sm font-medium ${post.soon ? 'text-red-500' : 'text-green-500'}`}>
                        {post.soon ? 'Срочно' : 'Не срочно'}
                    </div>
                </button>

                <div className="flex items-center gap-2">
                    <span className="text-sm">{post.done ? 'Выполнено' : 'Не выполнено'}</span>
                    <button onClick={() => handleToggleComplete()}>
                        <img className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                             src={post.done ? Done : Cancel} alt="Статус"/>
                    </button>
                </div>

                <button>
                    <img className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                         src={Edit} alt="Статус"/>
                </button>

                <button onClick={() => handleDelete()}>
                    <img className="w-7 h-5 cursor-pointer hover:scale-110 transition-transform"
                         src={Delete} alt="Статус"/>
                </button>

                {/*<button>*/}
                {/*    <img className="w-7 h-5 cursor-pointer hover:scale-110 transition-transform"*/}
                {/*        src={Edit} alt="Редактировать"*/}
                {/*    />*/}
                {/*</button>*/}
            </div>
        </>
    )
}