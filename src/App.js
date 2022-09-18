import { useState } from 'react';
import './App.css';
import TodoItem from './components/ToDo/TodoItem.js';
import AddTodo from './components/ToDo/AddTodo';
function App() {

const[todos,setTodos]=useState(
  [
    {id:1,title:"buy milk",discription:"buy milk", state:'false'},
    {id:2,title:"buy ticket",discription:"buy ticket", state:'falses'},
  ])

  const[formData, setFormData]=useState(
    {title:"", discription:""}
  );
  const[mode, setMode]=useState("create");

const handleSelectedForUpdate=(todoId)=>{
  const todo = todos.find(todo => todo.id === todoId);
  setFormData({
    title: todo.title,
    discription: todo.discription,
  });
  setMode("update");
}

  
const handleDelete = id => {
  setTodos(todos.filter(todo=>todo.id !== id))
}

const AddTodoFunction = (title, discription) => {
  setTodos([...todos, {id:Math.floor(Math.random()*1000), title:title, discription:discription, state:"false" }])
}

  return (
<div>
  <AddTodo  onAdd={AddTodoFunction} mode={mode} data={formData}/>
{  todos.map(todo => <TodoItem onDelete={handleDelete} onupdate={handleSelectedForUpdate} id={todo.id} title={todo.title} discription={todo.discription} state={todo.state}/>)}
</div>
  );
}

export default App;

