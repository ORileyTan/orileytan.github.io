const datetoday = new Date();
console.log("Running seasonal content script")
console.log("This month is ", datetoday)

if (datetoday.getMonth() == 9) {
	console.log("Loading haloween decor")
	document.getElementById("webpagestyle").setAttribute("href","scripts/stylehaloween.css")
}