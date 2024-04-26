import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<div className='Header'>
			<Link className='HeaderLink' to='/'>
				Главная
			</Link>
			<h1>мини-сервис банковских калькуляторов</h1>
		</div>
	)
}

export default Header
