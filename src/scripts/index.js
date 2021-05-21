import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const { restaurants } = require('../data/DATA.json');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const body = document.querySelector('#restaurants');

menu.addEventListener('click', function (event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

const showData = (data) => {
    return `
		<div class="card">
			<div class="card_header">
				<img src="${data.pictureId}" alt="foto ${data.name}" class="header_image">
				<p class="header_text">${data.city}</p>
			</div>
			<div class="card_body">
				<p class="body_info">Rating : ${data.rating}</p>
				<h2 class="body_name"><a href="">${data.name}</a></h2>
				<p class="body_description">${data.description.slice(0,300)}...</p>
			</div>
		</div>
    `;
}

restaurants.forEach(item => body.innerHTML += showData(item))
console.log('Hello Coders! :)');