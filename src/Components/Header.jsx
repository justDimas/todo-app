import '../Styles/Header.css'

const Header = ({todos}) => {
	const all = todos.length
	const finished = todos.reduce((previous, current)=>{return (current.finished) ? ++previous : previous},0)
	const current = todos.reduce((previous, current)=>{return (!current.finished) ? ++previous : previous},0)
	
	return (
		<header className="todo__header header">
			<h1 className="header__title">Todo</h1>
			<div className="header__all-todos">Количество задач: {all}</div>
			<div className="header__finished-todos">Количество выполненых: {finished}</div>
			<div className="header__current-todos">Количество текущих: {current}</div>
		</header>
	)
}

export default Header