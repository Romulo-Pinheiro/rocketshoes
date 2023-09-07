function clearActiveItem(){
	let activeItems = document.querySelectorAll(".active-item")
	activeItems.forEach((element) => element.classList.remove('active-item'))
}

let srcRelation = new Map([
	['assets/imagem-1-galeria.jpg', 'assets/imagem-1-ampliado.png'],
	['assets/imagem-2-galeria.jpg', 'assets/imagem-2-ampliado.png'],
	['assets/imagem-3-galeria.jpg', 'assets/imagem-3-ampliado.png']
]);


var items = document.querySelectorAll(".gallery-item");
var amplifiedImg = document.querySelector("#img-container > img")

for (var i = 0; i < items.length; i++) {
	items[i].onclick = function (e) {
		clearActiveItem();
		e.target.classList.add('active-item')
		amplifiedImg.setAttribute('src', srcRelation.get(e.target.getAttribute('src')))
	};
}

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('#navbar');

hamburguer.addEventListener("click", () => nav.classList.toggle("active"))
