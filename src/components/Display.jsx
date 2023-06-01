import papper from '../assets/icon-papper.svg'
import scissors from '../assets/icon-scissors.svg'
import rock from '../assets/icon-rock.svg'
import React, { useContext } from 'react'
import { AppContext } from '../App'

const Display = () => {

	const { youScore, setYouScore, pcScore, setPcScore } = useContext(AppContext);

	const papper_selection = () => {
		try {
			const picks = [document.querySelector('.display-rock'), document.querySelector('.display-papper'), document.querySelector('.display-scissors')]

			/* user icon selection (rock , papper, scissors) */

			document.querySelector('#display').style.background = 'none';

			picks[0].remove();
			picks[2].remove();
			picks[1].innerHTML += `<p>You picked</p>`;
			picks[1].style.transform = 'translate(-7em , 5em)';
			picks[1].innerHTML +=
				`<div class="pc_pick">
				<p class="pc_pick_text">The house picked</p>
				<button class="btn-start">START</button>
			</div>`;

			/* pc icon random selection (rock , papper, scissors) */

			document.querySelector('.btn-start').addEventListener('click', () => {

				const number_random = Math.round(Math.random() * 3);
				const user_pick_value = document.querySelector('.display-papper').value;
				const pc_pick = document.querySelector('.pc_pick');

				document.querySelector('.btn-start').remove();
				document.querySelector('.pc_pick_text').style.cssText = 'animation: pc_pick_text 1.7s linear; display:block';
				pc_pick.style.cssText = 'border:none;background-color: inherit; animation:start-game 1.7s linear';

				if (number_random <= 1) {
					pc_pick.innerHTML += `<img class='display-papper' style="transform: translateX(-.05em) scale(.94)" src=${papper} alt='papper-icon' />`;

				} else if (number_random == 2) {
					pc_pick.innerHTML += `<img class="display-scissors" style="transform: translateX(-.2em) scale(1)" src=${scissors} alt='scissors-icon' />`;

				} else if (number_random == 3) {
					pc_pick.innerHTML += `<img class='display-rock' style="transform:scale(1)" src=${rock} alt='rock-icon' />`;
				}

				/* game progress and game results match */

				setTimeout(() => {
					let resultText;

					if (user_pick_value < number_random && number_random == 2) {
						resultText = 'YOU LOSE';

					} else if (user_pick_value < number_random && number_random == 3) {
						resultText = 'YOU WIN';

					} else if (user_pick_value >= number_random && number_random <= 1) {
						resultText = 'DRAWN';
					}

					/* I couldn't apply media query effects in the "animations media.scss" file, so the only way to make the game screen responsive was this */

					if (window.innerWidth < 600) {
						console.log("Ancho de ventana menor a 768px");
						pc_pick.cssText = 'background-color: #fff;transform:translate(3em , -2em)';
						picks[1].style.cssText = 'transform:translate(-7em, -2em)';

					} else {
						pc_pick.style.cssText = 'background-color:#fff ;transform:translate(30em , -4.7em)';
						picks[1].style.cssText = 'transform:translate(-16em, 4em)';
					}

					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

					document.querySelector('#display').innerHTML +=
						`<div class="game-results">
						<p class="resultText">${resultText}</p>
						<button class="btn-reload">play again</button>
					</div>`;

					document.querySelector('.game-results').style.animation = 'result-match 600ms linear';

					if (resultText == 'YOU WIN') {
						document.querySelector('.resultText').style.cssText = 'animation:winner 2s linear infinite; color:#33f9b0; width:max-content';
						setYouScore(youScore + 1);

					} else if (resultText == 'YOU LOSE') {
						document.querySelector('.resultText').style.cssText = 'animation:loser 3s linear infinite; color:#f25d5d; width:max-content';
						setPcScore(pcScore + 1);

					} else if (resultText == 'DRAWN') {
						document.querySelector('.resultText').style.color = '#a8a8a8';
					}

					document.querySelector('.btn-reload').addEventListener('click', () => location.reload());
				}, 1500);
			});

		} catch (error) {
			console.error(error)
		}
	};


	const scissors_selection = () => {
		try {
			const picks = [document.querySelector('.display-rock'), document.querySelector('.display-papper'), document.querySelector('.display-scissors')];

			/* user icon selection (rock , papper, scissors) */

			document.querySelector('#display').style.background = 'none';

			picks[0].remove();
			picks[1].remove();
			picks[2].innerHTML += `<p>You picked</p>`;
			picks[2].style.transform = 'translate(-7em , 5em)';
			picks[2].innerHTML +=
				`<div class="pc_pick">
				<p class="pc_pick_text">The house picked</p>
				<button class="btn-start">START</button>
			</div>`;

			/* pc icon random selection (rock , papper, scissors) */

			document.querySelector('.btn-start').addEventListener('click', () => {
				const number_random = Math.round(Math.random() * 3);
				const user_pick_value = document.querySelector('.display-scissors').value;
				const pc_pick = document.querySelector('.pc_pick');

				document.querySelector('.btn-start').remove();
				document.querySelector('.pc_pick_text').style.cssText = 'animation: pc_pick_text 1.7s linear; display:block';
				pc_pick.style.cssText = 'border:none;background-color: inherit; animation:start-game 1.7s linear';

				if (number_random <= 1) {
					pc_pick.innerHTML += `<img class='display-papper mediaPapper' style="transform: translateX(-.1em) scale(1)" src=${papper} alt='papper-icon' />`;

				} else if (number_random == 2) {
					pc_pick.innerHTML += `<img class='display-scissors mediaScissors' style="transform: translateX(-.2em) scale(1)" src=${scissors} alt='scissors-icon' />`;

				} else if (number_random == 3) {
					pc_pick.innerHTML += `<img class='display-rock mediaRock' style="transform:scale(1)" src=${rock} alt='rock-icon' />`;
				}

				/* game progress and game results match */

				setTimeout(() => {
					let resultText;

					if (user_pick_value == number_random && number_random == 2) {
						resultText = 'DRAWN';

					} else if (user_pick_value < number_random && number_random == 3) {
						resultText = 'YOU LOSE';

					} else if (user_pick_value >= number_random && number_random <= 1) {
						resultText = 'YOU WIN';
					}

					/* I couldn't apply media query effects in the "animations media.scss" file, so the only way to make the game screen responsive was this */

					if (window.innerWidth < 600) {
						console.log("Ancho de ventana menor a 768px");
						pc_pick.cssText = 'background-color: #fff;transform:translate(3em , -2em)';
						picks[2].style.cssText = 'transform:translate(-7em, -2em)';

					} else {
						pc_pick.style.cssText = 'background-color:#fff ;transform:translate(30em , -4.7em)';
						picks[2].style.cssText = 'transform:translate(-16em, 4em)';
					}

					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

					document.querySelector('#display').innerHTML +=
						`<div class="game-results">
					<p class="resultText">${resultText}</p>
					<button class="btn-reload" >play again</button>
				</div>`;

					document.querySelector('.game-results').style.animation = 'result-match 600ms linear';

					if (resultText == 'YOU WIN') {
						document.querySelector('.resultText').style.cssText = 'animation:winner 2s linear infinite; color:#33f9b0;width:max-content';
						setYouScore(youScore + 1);

					} else if (resultText == 'YOU LOSE') {
						document.querySelector('.resultText').style.cssText = 'animation:loser 3s linear infinite; color:#f25d5d;width:max-content';
						setPcScore(pcScore + 1);

					} else if (resultText == 'DRAWN') {
						document.querySelector('.resultText').style.color = '#a8a8a8';
					}

					document.querySelector('.btn-reload').addEventListener('click', () => location.reload());
				}, 1500);
			});

		} catch (error) {
			console.error(error)
		}
	};


	const rock_selection = () => {
		try {
			const picks = [document.querySelector('.display-rock'), document.querySelector('.display-papper'), document.querySelector('.display-scissors')];

			/* user icon selection (rock , papper, scissors) */

			document.querySelector('#display').style.background = 'none';

			picks[2].remove();
			picks[1].remove();
			picks[0].innerHTML += `<p>You picked</p>`;
			picks[0].style.cssText = 'transform: translate(-7em , 0em)';
			picks[0].innerHTML +=
				`<div class="pc_pick">
				<p class="pc_pick_text">The house picked</p>
				<button class="btn-start">START</button>
			</div>`;

			/* pc icon random selection (rock , papper, scissors) */

			document.querySelector('.btn-start').addEventListener('click', () => {
				const number_random = Math.round(Math.random() * 3);
				const user_pick_value = document.querySelector('.display-rock').value;
				const pc_pick = document.querySelector('.pc_pick');

				document.querySelector('.btn-start').remove();
				document.querySelector('.pc_pick_text').style.cssText = 'animation: pc_pick_text 1.7s linear; display:block';
				pc_pick.style.cssText = 'border:none;background-color: inherit; animation:start-game 1.7s linear';

				if (number_random <= 1) {
					pc_pick.innerHTML += `<img class='display-papper' style="transform: scale(.95)" src=${papper} alt='papper-icon' />`;

				} else if (number_random == 2) {
					pc_pick.innerHTML += `<img class="display-scissors" style="transform: scale(.9)" src=${scissors} alt='scissors-icon' />`;

				} else if (number_random == 3) {
					pc_pick.innerHTML += `<img class='display-rock' style="transform:scale(1)" src=${rock} alt='rock-icon' />`;
				}

				/* game progress and game results match */

				setTimeout(() => {
					let resultText;

					if (user_pick_value > number_random && number_random == 2) {
						resultText = 'YOU WIN';

					} else if (user_pick_value == number_random && number_random == 3) {
						resultText = 'DRAWN';

					} else if (user_pick_value >= number_random && number_random <= 1) {
						resultText = 'YOU LOSE';
					}

					/* I couldn't apply media query effects in the "animations media.scss" file, so the only way to make the game screen responsive was this */

					if (window.innerWidth < 600) {
						console.log("Ancho de ventana menor a 768px");
						pc_pick.cssText = 'background-color: #fff;transform:translate(3em , -2em)';
						picks[0].style.cssText = 'transform:translate(-7em, -8em)';

					} else {
						pc_pick.style.cssText = 'background-color:#fff ;transform:translate(30em , -4.7em)';
						picks[0].style.cssText = 'transform:translate(-16em, 4em)';
					}

					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

					document.querySelector('#display').innerHTML +=
						`<div class="game-results">
						<p class="resultText">${resultText}</p>
						<button class="btn-reload">play again</button>
					</div>`;

					document.querySelector('.game-results').style.animation = 'result-match 900ms linear';

					if (resultText == 'YOU WIN') {
						document.querySelector('.resultText').style.cssText = 'animation:winner 2s linear infinite; color:#33f9b0;width:max-content';
						setYouScore(youScore + 1);

					} else if (resultText == 'YOU LOSE') {
						document.querySelector('.resultText').style.cssText = 'animation:loser 3s linear infinite; color:#f25d5d;width:max-content';
						setPcScore(pcScore + 1);

					} else if (resultText == 'DRAWN') {
						document.querySelector('.resultText').style.color = '#a8a8a8';
					}

					document.querySelector('.btn-reload').addEventListener('click', () => location.reload());
				}, 1600);
			});
		}
		catch (error) {
			console.error(error);
		}
	};


	return (
		<section id="display">
			<div>
				<button
					value='1'
					onClick={papper_selection}
					className="display-papper">
					<img src={papper} alt="papper-icon" />
				</button>
				<button
					value='2'
					onClick={scissors_selection}
					className="display-scissors">
					<img src={scissors} alt="scissors-icon" />
				</button>
			</div>
			<div>
				<button
					value='3'
					onClick={rock_selection}
					className="display-rock">
					<img src={rock} alt="rock-icon" />
				</button>
			</div>
		</section>
	)
}

export default Display
