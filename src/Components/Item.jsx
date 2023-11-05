import '../Styles/Item.css'

const Item = ({id, title, setTodos, finished}) => {
	const classMod = finished ? ' item__title_finished' : '' 
	return (
		<li className='list__item item'>
			<p className={'item__title' + classMod}>{title}</p>
			<button className='item__check-btn item-control' type="button" onClick={()=>{
				setTodos( todos => 
					todos.map(todo=> {
						if (todo.id === id)
							todo.finished=!todo.finished
						return todo
					})
				)
			}}>y</button>	
			<button className='item__remove-btn item-control' type="button" onClick={()=>{
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