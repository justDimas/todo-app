const Filter = ({setFilter}) => {
	const filters = [
		{id:'0', value:'Все задачи'},
		{id:'1', value:'Выполненные задачи'},
		{id:'2', value:'Невыполненные задачи'}
	]
	const buttons = filters.map(filter => <button key={filter.id} data-value={filter.id}>{filter.value}</button>)
	return (
		<div onClick={(e) => setFilter(e.target.dataset.value)}>
			{buttons}
		</div>
	)
}

export default Filter