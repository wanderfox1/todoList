import reducer, {
    addTodo,
    removeTodo,
    toggleComplete,
    toggleSoon,
    setFilter,
    clearAll
} from './todoSlice';
import {Post} from "./post.types.ts";

const baseTodo = {
    id: '1',
    name: 'Test task',
    createdAt: new Date(),
    done: false,
    soon: false
};

// const baseTodo2 = {
//     id: '1',
//     name: 'Test task',
//     createdAt: new Date(),
//     done: false,
//     soon: false
// };

describe('todoSlice', () => {
    it('должен вернуть initialState по умолчанию', () => {
        expect(reducer(undefined, { type: '@@INIT' })).toEqual({
            todos: [],
            filter: 'all'
        });
    });

    it('должен добавить новую задачу', () => {
        const state = reducer(undefined, addTodo(baseTodo));
        expect(state.todos.length).toBe(1);
        expect(state.todos[0]).toEqual(baseTodo);
    });

    it('должен удалить задачу по id', () => {
        const stateWithTodo: { todos: Post[]; filter: 'all' | 'soon' | 'done' } = {
            todos: [baseTodo],
            filter: 'all',
        };
        const state = reducer(stateWithTodo, removeTodo({ id: '1' }));
        expect(state.todos).toHaveLength(0);
    });

    it('должен переключить поле done', () => {
        const stateWithTodo: { todos: Post[]; filter: 'all' | 'soon' | 'done' } = {
            todos: [baseTodo],
            filter: 'all',
        };

        const state = reducer(stateWithTodo, toggleComplete({ id: '1', done: true }));
        expect(state.todos[0].done).toBe(true);
    });

    it('должен переключить поле soon', () => {
        const stateWithTodo: { todos: Post[]; filter: 'all' | 'soon' | 'done' } = {
            todos: [baseTodo],
            filter: 'all',
        };
        const state = reducer(stateWithTodo, toggleSoon({ id: '1', soon: true }));
        expect(state.todos[0].soon).toBe(true);
    });

    it('должен менять фильтр', () => {
        const state = reducer(undefined, setFilter('done'));
        expect(state.filter).toBe('done');
    });

    it('должен очищать все задачи', () => {
        const stateWithTodos: { todos: Post[]; filter: 'all' | 'soon' | 'done' } = {
            todos: [baseTodo, {...baseTodo, id: '2'}],
            filter: 'all',
        };
        const state = reducer(stateWithTodos, clearAll());
        expect(state.todos).toHaveLength(0);
    });
});
