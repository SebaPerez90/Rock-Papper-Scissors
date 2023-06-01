import React from 'react'
import papper from '../assets/icon-papper.svg'
import scissors from '../assets/icon-scissors.svg'
import rock from '../assets/icon-rock.svg'

const Rules = () => {

	const showRules = () => {

		document.querySelector('.rules-div').style.cssText = 'display:flex; flex-direction:column; align-items:center; justify-content:flex-start; background-color:#fff; border-radius:.7em; height:25em; width:20em; gap: 3em; position:absolute; margin-bottom:8em;transform:scale(1.2); animation: load-icon 400ms linear';
		document.querySelector('#display').style.cssText = 'opacity:.3; filter:blur(3px); transition:all 600ms';
		document.querySelector('#header').style.cssText = 'opacity:.3; filter:blur(3px); transition:all 600ms';
		document.querySelector('.attribution').style.cssText = 'opacity:.3; filter:blur(3px); transition:all 600ms';
		document.querySelector('.rules-open').style.cssText = 'opacity:.3; filter:blur(3px); transition:all 600ms';

		// document.querySelector('#display').style.background = 'none';

	};

	const closeRules = () => {
		document.querySelector('#display').style.removeProperty('opacity')
		document.querySelector('#display').style.removeProperty('filter')
		document.querySelector('#header').style.removeProperty('opacity')
		document.querySelector('#header').style.removeProperty('filter')
		document.querySelector('.attribution').style.removeProperty('opacity')
		document.querySelector('.attribution').style.removeProperty('filter')
		document.querySelector('.rules-open').style.removeProperty('opacity')
		document.querySelector('.rules-open').style.removeProperty('filter')
		document.querySelector('.rules-div').style.display = 'none';
	};


	return (
		<section id="rules">
			<button
				onClick={showRules}
				className="rules-open">
				Rules</button>

			<div className="rules-div">
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
					<h1 className="rules-h1">RULES</h1>
					<button
						onClick={closeRules}
						className="rules-close">
						X</button>
				</div>
				<div className="rules-btns">
					<img
						className='rules-btns papper'
						src={papper}
						alt="papper-icon" />
					<img
						className='rules-btns rock'
						src={rock}
						alt="rock-icon" />
					<img
						className='rules-btns scissors'
						src={scissors}
						alt="scissors-icon" />
				</div>
				<div className='row_first'>
					<span className='row_first a'></span>
					<span className='row_first b'></span>
					<span className='row_first c'></span>
				</div>
				<div className='row_second'>
					<span className='row_second a'></span>
					<span className='row_second b'></span>
					<span className='row_second c'></span>
				</div>
				<div className='row_thrid'>
					<span className='row_thrid a'></span>
					<span className='row_thrid b'></span>
					<span className='row_thrid c'></span>
				</div>
			</div>
		</section>
	)
}

export default Rules
