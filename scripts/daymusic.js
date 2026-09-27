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
'13' : 'Nostalgia ・古代 祐三',
'14' : 'Starlight Spada ・A-One',
'15' : 'Quartz Quadrant (JPN) ・幡谷 尚史&尾形 雅史',
'16' : 'DEEP IN THE HEATWAVE ・GUCCI &小寺可南子',
'17' : 'My initial ・Xceon &小林マナ& mioco',
'18' : 'Necrophantasia ・SOUND HOLIC VO:YURiCa / 花たん',
'19' : 'GET IN THE GROOVE ・DJ Command(Eurobeat Union)feat. okogeeechann'
}

const chosen = Math.floor(Math.random() * 20);

document.addEventListener('DOMContentLoaded', function() {
document.getElementById("daymusic").innerHTML = muslist[chosen]
});
