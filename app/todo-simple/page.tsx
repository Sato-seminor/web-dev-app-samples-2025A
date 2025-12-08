"use client";

import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    if (inputText !== "") {
      const newTodos = Array.from(todos);
      newTodos.push(inputText);
      setTodos(newTodos);
      setInputText("");
    }
  }

  const todoElements = [];
  for (let i = 0; i < todos.length; i += 1) {
    todoElements.push(<li key={i} className="py-2">{todos[i]}</li>);
  }

  return (
    <div className="p-8">
      <div className="w-[600px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">TODO アプリ</h1>

        <div className="mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
          />
          <button onClick={addTodo} className="w-full px-6 py-2 bg-blue-500 text-white rounded">
            追加
          </button>
        </div>

        <div>
          {todos.length === 0 ? <p className="py-8">タスクがありません</p> : <ul>{todoElements}</ul>}
        </div>
      </div>
    </div>
  );
}
