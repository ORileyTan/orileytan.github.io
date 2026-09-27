const feedurl = "https://orileytan.github.io/feed.xml"

console.log("Getting feed data from ", feedurl)

fetch(feedurl)
.then((response) => {
if (!response.ok) {
console.error("Data grab fail ${response.status}")
}
return response.text().then((data) => {
console.log(data)
console.log("parsing data")

parser = new DOMParser()
parseddata = parser.parseFromString(data,"application/xml")
console.log(parseddata)
console.log("Writing latest data")

document.getElementById("recentfeeddate1").innerHTML = parseddata.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue
document.getElementById("recentfeedtitle1").innerHTML = parseddata.getElementsByTagName("title")[1].childNodes[0].nodeValue
document.getElementById("recentfeedcategory1").innerHTML = parseddata.getElementsByTagName("category")[1].childNodes[0].nodeValue

document.getElementById("recentfeeddate2").innerHTML = parseddata.getElementsByTagName("pubDate")[1].childNodes[0].nodeValue
document.getElementById("recentfeedtitle2").innerHTML = parseddata.getElementsByTagName("title")[2].childNodes[0].nodeValue
document.getElementById("recentfeedcategory2").innerHTML = parseddata.getElementsByTagName("category")[2].childNodes[0].nodeValue

document.getElementById("recentfeeddate3").innerHTML = parseddata.getElementsByTagName("pubDate")[2].childNodes[0].nodeValue
document.getElementById("recentfeedtitle3").innerHTML = parseddata.getElementsByTagName("title")[3].childNodes[0].nodeValue
document.getElementById("recentfeedcategory3").innerHTML = parseddata.getElementsByTagName("category")[3].childNodes[0].nodeValue

document.getElementById("latestnews").innerHTML = parseddata.getElementsByTagName("description")[1].childNodes[0].nodeValue

})
})