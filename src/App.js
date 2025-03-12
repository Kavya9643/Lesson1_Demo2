import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('work');
    const [dueDate, setDueDate] = useState('');

    const addTodo = () => {
        if (task.trim()) {
            setTodos([...todos, { task, priority, category, dueDate, completed: false }]);
            setTask('');
            setPriority('medium');
            setCategory('work');
            setDueDate('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Task" 
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="health">Health</option>
            </select>
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        toggleTodo={() => toggleTodo(index)} 
                        deleteTodo={() => deleteTodo(index)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;