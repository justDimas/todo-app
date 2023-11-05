import '../Styles/Filter.css'

const Filter = ({setFilter, filter}) => {
	const classMod = ' filter__button_selected'
	const btnData = [
		{id:'0', value:'Все задачи'},
		{id:'1', value:'Выполненные'},
		{id:'2', value:'Текущие'}
	]
	const buttons = btnData.map(data => <li className="filter__item"><button className={(data.id === filter) ? 'filter__button ' +  classMod : 'filter__button'} key={data.id} data-value={data.id}>{data.value}</button></li>)
	return (
		<ul className="body__filter filter" onClick={(e) => setFilter(e.target.dataset.value)}>
			{buttons}
		</ul>
	)
}

export default Filter