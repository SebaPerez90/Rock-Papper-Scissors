import React, { useContext } from 'react'
import { AppContext } from '../App'

const Header = () => {

	const { youScore, setYouScore, pcScore, setPcScore } = useContext(AppContext)

	return (
		<section id="header">
			<ul className="header-list">
				<li className="header-list rock">Rock</li>
				<li className="header-list paper">Paper</li>
				<li className="header-list scissors">Scissors</li>
			</ul>
			<div className="header-score">
				<div className='header-score container'>
					<div>
						<p className="header-score h2">you</p>
						<span className="header-score score">{youScore}</span>
					</div>
					<div>
						<p className="header-score h2">pc</p>
						<span className="header-score score">{pcScore}</span>
					</div>
				</div>
				<button onClick={() => {
						setPcScore(0)
						setYouScore(0)}}>restart</button>
			</div>
		</section>
	)
}

export default Header
