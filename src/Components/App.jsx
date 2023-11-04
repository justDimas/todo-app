import { useEffect, useState } from "react";

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
    <div className="App">
		<Header todos={todos}/>
		<List setTodos={setTodos} todos={todos}/>
		<AddForm setTodos={setTodos}/>
	 </div>
  );
}

export default App;