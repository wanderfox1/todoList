import {Cancel, Done} from '../../assets'
import {PostProps} from './post.types.ts'

export const Post = ({post}: PostProps) => {

    return (
        <>
            <div
                className="flex flex-col items-start my-2 gap-2 p-4 w-100 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-lg font-semibold">{post.name}</div>
                <div className="text-sm text-gray-500">{post.createdAt.toLocaleDateString()}</div>
                <div className={`text-sm font-medium ${post.soon ? 'text-red-500' : 'text-green-500'}`}>
                    {post.soon ? 'Срочно' : 'Не срочно'}
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <img className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" src={post.done ? Done : Cancel} alt="Статус"/>
                    <span className="text-sm">{post.done ? 'Выполнено' : 'Не выполнено'}</span>
                </div>

            </div>
        </>
    )
}