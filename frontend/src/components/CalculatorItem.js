import React from 'react'
import { Link } from 'react-router-dom'
import './CalculatorItem.css'
import { useEffect, useState } from 'react'

function CalculatorItem({ id }) {
	const [calc, setCalc] = useState({})

	useEffect(() => {
		const api = `http://127.0.0.1:9001/calculator/get/one/` + id

		fetch(api)
			.then(res => res.json())
			.then(result => {
				setCalc(result.data)
			})
	})

	return (
		<div className='CalculatorItem'>
			<p>{calc.nameCalc}</p>
			<Link to={`/interfaceCalc/${calc._id}`} className='btn'>
				выбрать
			</Link>
		</div>
	)
}

export default CalculatorItem
