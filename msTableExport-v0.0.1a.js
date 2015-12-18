/**
 * Created by Mordi on 24/06/15.
 * Elibyy , class this up.
 * License: wtfpl (google it)
 */
var mstableExport = function (id, title, dir) {
	//settings
	this.id = id;
	this.title = title;
	this.dir = dir;
}

mstableExport.prototype.CSV = function () {
	var csv = '';
	var table = document.getElementById(this.id);
	var trs = table.querySelectorAll('tr');

	for (i = 0; i < trs.length; i++) {
		if (trs[i].style.display != 'none') {
			var tds = trs[i].querySelectorAll('td,th');
			for (j = 0; j < tds.length; j++) {
				csv += '"' + tds[j].innerHTML + '",';
			}
			csv += "\n%0A";
		}
	}

	var link = document.createElement("a");
	link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + csv);
	link.setAttribute("download", this.title + ".csv");
	link.click();
};

mstableExport.prototype.isEven = function (n) {
	return n == parseFloat(n) ? !(n % 2) : void 0;
};

mstableExport.prototype.print = function () {
	var data = '';
	data += '<h1 style="text-align: center;">' + this.title + '</h1>';
	data += '<table style="-webkit-print-color-adjust:exact;border: black solid 1px;border-collapse: collapse;margin: auto;direction:' + this.dir + ';">';
	var table = document.getElementById(this.id);
	var trs = table.querySelectorAll('tr');

	var head = trs[0].querySelectorAll('td,th');
	data += '<thead>';
	data += '<tr>';
	for (var jh = 0; jh < head.length; jh++) {
		data += '<th style="font-weight: bold; background-color: #b2afaa;border: 1px solid black;padding: 3px;text-align: center;">' + head[jh].innerHTML + '</th>';
	}
	data += '</tr>';
	data += '</thead>';

	data += '<tbody>';
	for (var i = 1; i < trs.length; i++) {
		if (trs[i].style.display != 'none') {
			var rs = (this.isEven(i) ? 'background-color: #d9d9d9' : '');
			data += '<tr style="' + rs + ' ">';
			var tds = trs[i].querySelectorAll('td');
			for (var j = 0; j < tds.length; j++) {
				data += '<td style="border: 1px solid black;padding: 3px;text-align: center;">' + tds[j].innerHTML + '</td>';
			}
			data += '</tr>';
		}
	}
	data += '</tbody>';
	data += '</table>';

	var p_win = window.open();
	p_win.document.write(data);
	p_win.print();
};

function MSTE(id, title, dir) {
	return new mstableExport(id, title, dir);
}
