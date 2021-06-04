const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Gun', 'Knife', 'Machete'],
	attack: 20
}

const player2 = {
	player: 2,
	name: 'Liu Kang',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon: ['Gun', 'Knife', 'Kunai'],
	attack: 30
}

function createElement(tag, className) {
	const $tag = document.createElement(tag);

	if (className) {
		$tag.classList.add(className);
	}

	return $tag;
}

function createPlayer(player) {
	const $player = createElement('div', 'player' + player.player)
	const $progressbar = createElement('div', 'progressbar')
	const $character = createElement('div', 'character')
	const $life = createElement('div', 'life')
	const $name = createElement('div', 'name')
	const $img = createElement('img');

	$player.appendChild($progressbar);
	$player.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	$life.style.width = player.hp + '%';
	$name.innerHTML = player.name;
	$img.src = player.img;

	return $player;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	let randomAttack = Math.ceil(Math.random() * 20);

	if (randomAttack <= player.hp) {
		player.hp -= randomAttack;
	} else {
		player.hp -= player.hp;

		$randomButton.disabled = true;
	}

	if (player1.hp <= 0) {
		$arenas.appendChild(playerWins(player2.name));
	} else if (player2.hp <= 0) {
		$arenas.appendChild(playerWins(player1.name));
	}

	$playerLife.style.width = player.hp + '%';
}

function playerWins(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' wins!';
	if (name === 'drow') {
		$loseTitle.innerText = 'DROW!';
	}
	return $loseTitle;
}

$randomButton.addEventListener('click', function () {
	changeHP(player1);
	changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
