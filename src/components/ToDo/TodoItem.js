const TodoItem=({id,title,state,onDelete,onupdate,discription}) => 
{
    return(
        <div key={id}>
            <div>
                id={id}
            </div>
            <div>
                title={title}
            </div>
            <div>
                discription={discription}
            </div>
            <div>
                state={state}
            </div>
            <button onClick={()=>onDelete(id)}>delete</button>
            <button onClick={()=>onupdate(id)}>update</button>
        </div>
        
    )
}
export default TodoItem;