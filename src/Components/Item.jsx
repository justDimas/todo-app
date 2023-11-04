const Item = ({id, title, setTodos}) => {
	return (
		<li>
			<div>{title}</div>
			<button type="button" onClick={()=>{
				setTodos( todos => 
					todos.map(todo=> {
						if (todo.id === id)
							todo.finished=!todo.finished
						return todo
					})
				)
			}}>y</button>	
			<button type="button" onClick={()=>{
				setTodos(todos=>
					todos.reduce((prev, current)=>{
						if(current.id!==id) 
							prev.push(current)
						return prev
					},[])
				)
			}}>x</button>	
		</li>
	)
}

export default Item