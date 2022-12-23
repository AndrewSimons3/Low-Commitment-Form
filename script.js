console.log('hello world');

const thankYou = document.querySelector('.thank-you');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	form.style.display = 'none';
	thankYou.style.display = 'block';
});
