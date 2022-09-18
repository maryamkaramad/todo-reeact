const AddTodo = ({onAdd, mode, data}) => {
 
  const handleSubmit = (e) =>
  {
    e.preventDefault()
    const formData= new FormData(e.target)
    const todo = Object.fromEntries(formData.entries())
    onAdd(todo.title, todo.discription)
  }

  return(
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title:</label>
      <input  id={"title"} name={"title"} value={data.title} />
      <br/>
      <label htmlFor="discription">discription:</label>
      <input  id={"discription"} name={"discription"} value={data.discription}/>
      <br/>
      <button type={"submit"}>{mode}</button>
    </form>
  </div>
  )
}


export default AddTodo;