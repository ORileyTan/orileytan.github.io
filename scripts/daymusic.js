const muslist = {
'0' : 'Enjoy the Proccess ・古代 祐三&앤드류 최 ',
'1' : 'ELDORADO ・Dave Rodgers',
'2' : 'THE RACE OF THE NIGHT ・Dave Rodgers',
'3' : 'BLAZABILITY ・m.o.v.e',
'4' : 'ADRENALINE ・MANUEL',
'5' : 'LOVE IS THE NAME OF LOVE ・Irene',
'6' : 'Night Boat to Cairo ・Madness',
'7' : 'Fascination ・古代 祐三',
'8' : 'Running from Evil ・Bobby Prince',
'9' : "Driver's Delight ・古代 祐三",
'10' : 'Razormind ・Simon Viklund',
'11' : 'Glory Days ・古代 祐三',
'12' : 'Today is Payday Too ・Gustavo Coutinho & Ye Olde Hoxton',
}

const chosen = Math.floor(Math.random() * 13);

document.addEventListener('DOMContentLoaded', function() {
document.getElementById("daymusic").innerHTML = muslist[chosen]
});
