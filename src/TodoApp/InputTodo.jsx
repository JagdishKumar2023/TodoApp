import React, { useState } from "react";

export const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");

  const [Todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos((prev) =>
      setTodos([
        ...prev,
        { id: Date.now(), todo: inputTodo, isCompleted: false },
      ])
    );
  };

  return (
    <div>
      <div className="Todo">
        <input
          type="text"
          placeholder="enter todo"
          onChange={(e) => setInputTodo(e.target.value)}
          value={inputTodo}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <Todos todos={Todos} />
    </div>
  );
};
