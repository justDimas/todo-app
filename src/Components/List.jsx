import { useState } from "react";
import '../Styles/List.css';

import Filter from "./Filter";
import Item from "./Item"

const List = ({setTodos, todos}) => {
	const [filter, setFilter] = useState('0')

	let todoComponents = todos.map(todo => 
		<Item key={todo.id} id={todo.id} title={todo.title} finished={todo.finished} setTodos={setTodos}/>
	)

	switch(filter){
		case '0': break;
		case '1':{ 
			todoComponents = todoComponents.filter(todo=>todo.props.finished)
			break;
		}
		case '2':{ 
			todoComponents = todoComponents.filter(todo=>!todo.props.finished)
			break;
		}
		default:	break;
	}

	return (
		<main className="todo__body body">
			<Filter setFilter={setFilter} filter={filter}/>
			<ul className="body__list list">
				{todoComponents}
			</ul>
		</main>
	)
}

export default List