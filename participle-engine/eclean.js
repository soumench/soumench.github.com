function cleaninput(input) {
	return input.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s\s+$/g, " ").toLowerCase();
}

function e(id) {
	return document.getElementById(id);
}