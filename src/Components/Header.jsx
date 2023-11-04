const Header = ({todos}) => {
	const all = todos.length
	const current = todos.reduce((previous, current)=>{return (!current.finished) ? ++previous : previous},0)
	const finished = todos.reduce((previous, current)=>{return (current.finished) ? ++previous : previous},0)
	return (
		<header>
			<div>Количество задач: {all}</div>
			<div>Количество текущих задач: {current}</div>
			<div>Количество выполненых задач: {finished}</div>
		</header>
	)
}

export default Header