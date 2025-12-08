"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    if (inputText !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      const newTodos = Array.from(todos);
      newTodos.push(newTodo);
      setTodos(newTodos);
      setInputText("");
    }
  }

  function toggleTodo(id: number) {
    const newTodos = [];
    for (let i = 0; i < todos.length; i += 1) {
      if (todos[i].id === id) {
        newTodos.push({
          id: todos[i].id,
          text: todos[i].text,
          completed: !todos[i].completed,
        });
      } else {
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  }

  function deleteTodo(id: number) {
    const newTodos = [];
    for (let i = 0; i < todos.length; i += 1) {
      if (todos[i].id !== id) {
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  }

  const todoElements = [];
  for (let i = 0; i < todos.length; i += 1) {
    todoElements.push(
      <div key={todos[i].id} className="p-3 mb-2 border border-gray-300 rounded">
        <div className="mb-2">
          <input
            type="checkbox"
            checked={todos[i].completed}
            onChange={() => toggleTodo(todos[i].id)}
            className="w-5 h-5 mr-2"
          />
          <span className={todos[i].completed ? "line-through" : ""}>
            {todos[i].text}
          </span>
        </div>
        <button
          onClick={() => deleteTodo(todos[i].id)}
          className="w-full px-3 py-1 bg-red-500 text-white rounded"
        >
          削除
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <div className="w-[600px] mx-auto p-6">
        <h1 className="text-3xl mb-6">TODO アプリ</h1>

        <div className="mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-300"
          />
          <button onClick={addTodo} className="w-full px-6 py-2 bg-blue-500 text-white">
            追加
          </button>
        </div>

        <div>
          {todos.length === 0 ? <p className="py-8">タスクがありません</p> : todoElements}
        </div>
      </div>
    </div>
  );
}
