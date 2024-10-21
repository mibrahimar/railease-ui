import { FormEvent, useState } from "react";

import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const text = form.get("text");

    if (!text) return;

    const newTodos = todos;

    newTodos.push({
      id: Date.now(),
      text: text.toString(),
      completed: false,
    });

    setTodos([...newTodos]);

    e.currentTarget.reset();
  }

  function toggleCompleted(index: number) {
    const newTodos = todos;
    newTodos[index].completed = !newTodos[index].completed;
    setTodos([...newTodos]);
  }

  return (
    <div className="app">
      <form onSubmit={addTodo}>
        <h3>
          <label htmlFor="new-todo-input">What needs to be done?</label>
        </h3>
        <input
          type="text"
          placeholder="write down your task"
          id="new-todo-input"
          name="text"
          autoComplete="off"
        />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} onClick={() => toggleCompleted(index)}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
