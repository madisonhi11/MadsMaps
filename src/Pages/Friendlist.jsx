import React from 'react'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
const FriendList = () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
  
    React.useEffect(() => {
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    }, []);
  
    React.useEffect(() => {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }, [todos]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  
    function deleteTodo(id) {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  
    function toggleComplete(id) {
      let updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  
    function submitEdits(id) {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }
  
    return (
        <>
        <Navbar/>
      <container className="favContainer">
      <div id="todo-list">
        <h1 className="listText">Add Your Friends Name and Contact Info</h1>
        <p>Your Notes</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name & Contact"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" >Add Friends</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todo-text">
              {/* <input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              /> */}
              {todo.id === todoEditing ? (
                <input
                  type="text"
                 
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
              ) : (
                <button onClick={() => setTodoEditing(todo.id)}>EDIT</button>
              )}
  
              <button onClick={() => deleteTodo(todo.id)}>TRASH</button>
            </div>
          </div>
        ))}
      </div>
      </container>
      <Footer/>
      </>
    );
  };
  
  export default FriendList;