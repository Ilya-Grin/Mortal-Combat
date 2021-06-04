const player1 = {
	name: 'Scorpion',
	hp: 50,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['Gun', 'Knife', 'Machete'],
	attack: function () {
		console.log(player1.name + ' Fight...');
	}
}

const player2 = {
	name: 'Sonya',
	hp: 80,
	img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
	weapon: ['Gun', 'Knife', 'Kunai'],
	attack: function () {
		console.log(player2.name + ' Fight...');
	}
}

function createPlayer(player, name) {
	const $arenas = document.querySelector('.arenas');
	const $player = document.createElement('div');
	const $progressbar = document.createElement('div');
	const $character = document.createElement('div');
	const $life = document.createElement('div');
	const $name = document.createElement('div');
	const $img = document.createElement('img');

	$player.classList.add(name);
	$progressbar.classList.add('progressbar');
	$character.classList.add('character');
	$life.classList.add('life');
	$name.classList.add('name');

	$arenas.appendChild($player);
	$player.appendChild($progressbar);
	$player.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	$life.style.width = player.hp + '%';
	$name.innerHTML = player.name;
	$img.src = player.img;
}

createPlayer(player1, 'player1');
createPlayer(player2, 'player2');