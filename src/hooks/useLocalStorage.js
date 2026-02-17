import { useState, useCallback } from 'react';

const STORAGE_KEY = 'bypost_todos';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function useTodos() {
  const [todos, setTodos] = useState(loadFromStorage);

  const addTodo = useCallback((text) => {
    setTodos((prev) => {
      const next = [
        ...prev,
        { id: crypto.randomUUID(), text, completed: false, createdAt: Date.now() },
      ];
      saveToStorage(next);
      return next;
    });
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => {
      const next = prev.filter((t) => t.id !== id);
      saveToStorage(next);
      return next;
    });
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) => {
      const next = prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      saveToStorage(next);
      return next;
    });
  }, []);

  const editTodo = useCallback((id, newText) => {
    setTodos((prev) => {
      const next = prev.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      );
      saveToStorage(next);
      return next;
    });
  }, []);

  return { todos, addTodo, removeTodo, toggleTodo, editTodo };
}
