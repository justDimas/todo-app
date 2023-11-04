import { useState } from "react"

const AddForm = ({setTodos}) => {
	const [inputValue, setInputValue] = useState('')
	
	function handleSubmit(e){
		e.preventDefault()
			
		if(!inputValue) return
		setTodos( todos =>
			[...todos, {
				id: todos[todos.length-1].id+1,
				title: inputValue,
				finished: false,
			}]
		)

		setInputValue('')
	
	}

	return (
		<form onSubmit={(e)=>handleSubmit(e)}>
			<label htmlFor='todo-input'>Добавьте задачу</label>
			<input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
			<button>Добавить</button>
		</form>
	)
}

export default AddForm