import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
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
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        onToggle={() => toggleTodo(index)} 
                        onDelete={() => deleteTodo(index)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;