
// import {Button} from './Button/Button.tsx'
import arrowDown from '../assets/arrow_down.png'
export type Note = {
    name: string,
    description?: string,
    completed?: boolean
}

export const MainPage = () => {

    return (
        <>
            <div className="my-20 mx-0">
                <div className="w-full flex items-center justify-center align-middle mb-5">
                    <button className="mr-4">
                        <img src={arrowDown} className="w-4 h-4" alt="Arrow down"/>
                    </button>
                    <input
                        placeholder="Write your to-do here"
                        className="border px-4 py-2 rounded-xl bg-pink-100 border-none hover:border-none"
                    />
                </div>

                <div className="flex flex-row justify-center gap-10 ">
                    <button className="bg-yellow-300 w-35 h-10 rounded-2xl">Создать</button>
                    <button className="bg-green-300 w-35 h-10 rounded-2xl">Редактировать</button>
                    <button className="bg-red-300 w-35 h-10 rounded-2xl">Удалить</button>
                </div>

                <div className="flex">




                </div>
            </div>
        </>
    )
}