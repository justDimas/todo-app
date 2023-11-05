import { useState } from "react"
import '../Styles/AddForm.css'

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
		<form className="todo__form form" onSubmit={(e)=>handleSubmit(e)}>
			<label className='form__label' htmlFor='todo-input'>Добавьте задачу</label>
			<input className="form__input" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
			<button className="form__submit">+</button>
		</form>
	)
}

export default AddForm