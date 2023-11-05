import { useEffect, useState } from "react";
import '../Styles/App.css'

import Header from "./Header";
import List from "./List";
import AddForm from "./AddForm";

import fetchTodos from "../Todos";

const App = () => {
	const [todos, setTodos] = useState([])
	useEffect(()=>{
		let data = fetchTodos()
		setTodos(data)
	},[])

	return (
    <div className="App todo">
		<div className="container">
			<Header todos={todos}/>
			<List setTodos={setTodos} todos={todos}/>
			<AddForm setTodos={setTodos}/>
		</div>
	 </div>
  );
}

export default App;