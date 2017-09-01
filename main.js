//function generateColor() {
//	return '#' + Math.floor(Math.random() * 16777215).toString(16)
//}
function generateColor() {

	var r = Math.floor(Math.random() * (256));

	var g = Math.floor(Math.random() * (256));

	var b = Math.floor(Math.random() * (256));

	return c = '#' + r.toString(16) + g.toString(16) + b.toString(16);


}

function invertColor(rgb) {
	rgb = Array.prototype.join.call(arguments).match(/(-?[0-9\.]+)/g);
	for (var i = 0; i < rgb.length; i++) {
		rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
	}
	return rgb;
}

function createTable(size) {
	const table = document.createElement('table');
	for (var i = 0; i < size; i++) {
		const tr = document.createElement('tr');
		for (var j = 0; j < size; j++) {
			const td = document.createElement('td');
			td.textContent = `${Math.floor(Math.random()*100)}`;
			td.style.border = '1px solid black';
			td.style.width = 25 + 'px';
			td.style.height = 25 + 'px';
			td.style.textAlign = 'center';
			td.style.borderRadius = '50%';


			td.style.backgroundColor = generateColor();
			td.style.color = invertColor('td.style.backgroundColor');
			tr.appendChild(td);


		}
		table.appendChild(tr);
	}
	table.style.position = 'absolute';
	document.body.appendChild(table);
	//var h = window.innerHeight;
	//var w = window.innerWidth;
	//table.style.top = h + 'px';
	//table.style.left = w + 'px';
	table.style.left = (window.innerWidth - table.clientWidth) / 2 + 'px';
	table.style.top = (window.innerHeight - table.clientHeight) / 2 + 'px';


	return table;
}
document.body.innerHTML = '';
var t = createTable(10);