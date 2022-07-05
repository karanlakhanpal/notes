if (window.localStorage.getItem('id') == undefined) {
	window.localStorage.setItem('id', 1);
}

function openCreate() {
	var home = document.getElementById("home");
	home.style.display = "none";

	var create = document.getElementById("create");
	create.style.display = "unset";
}

document.querySelector(".btn").onclick = openCreate;

function openHome() {
	var home = document.getElementById("home");
	home.style.display = "unset";

	var create = document.getElementById("create");
	create.style.display = "none";
}

document.querySelector(".back").addEventListener('click', openHome);

function createCompo(title) {
	var div1 = document.createElement('div');
	div1.className = "compo"

	var h1 = document.createElement("h1");
	h1.innerHTML = title;

	var div2 = document.createElement('div');

	var h2 = document.createElement('h2');
	h2.innerHTML = "Created on 30.06.2022";

	var figure = document.createElement('figure');
	figure.className = "settings";

	var div3 = document.createElement('div');
	var div4 = document.createElement('div');
	var div5 = document.createElement('div');

	figure.append(div3, div4, div5);
	div2.append(h2, figure);
	div1.append(h1, div2);

	document.querySelector(".sheet").append(div1);
}
createCompo("This is a title");
createCompo("This is a title");
createCompo("This is a title");
createCompo("This is a title");
createCompo("This is a title");

function sendingdata() {
	var title = document.querySelector("#title");
	var desc = document.querySelector('#description');
	var id = parseInt(window.localStorage.getItem('id'));

	if(title.value != "" || desc.value != ""){
		window.localStorage.setItem('title' + id, title.value);
		window.localStorage.setItem('desc' + id,desc.value);

		id = id + 1;
		
		window.localStorage.setItem('id',id);	
	}
}

document.querySelector('.back').addEventListener('click', sendingdata)

function loadCompos(params) {
	var id = parseInt(window.localStorage.getItem('id'));
	
	if (id > 1) {
		document.querySelector(".blank").style.display = "none";
	 }

	 createCompo(title);
}

loadCompos();