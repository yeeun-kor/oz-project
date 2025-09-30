import { useCallback, useMemo, useState } from 'react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoStats from './TodoStats';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const generateId = () => Math.floor(Math.random() * 10000);

    //setTodos 호출하여 todos상태를 업데이트
    // 의존성 배열도 todos로 받아와야함.
    const handleAdd = useCallback(
        (text) => {
            const newTodo = {
                id: generateId(),
                text,
                completed: false,
                createdAt: new Date(),
            };

            setTodos([...todos, newTodo]);
            console.log('add');
        },
        [todos],
    );

    const handleToggle = useCallback(
        (id) => {
            setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
        },
        [todos],
    );

    const handleDelete = useCallback(
        (id) => {
            console.log('handleDelete');
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos],
    );

    const handleEdit = useCallback(
        (id, newText) => {
            setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
        },
        [todos],
    );

    const handleFilterChange = useCallback((newFilter) => {
        console.log('filter');
        setFilter(newFilter);
    }, []);

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-5">할 일 관리 앱</h1>
            <TodoForm onAdd={handleAdd} />
            <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
            <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
            <TodoStats todos={todos} />
        </div>
    );
};

export default Todo;
