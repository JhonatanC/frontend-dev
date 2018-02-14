/*$('.content-slider img').each((ev) => {
	console.log(`Ev tiene: ${ev}`)
})*/

var contar = 0


setInterval(() => {
	$('.content-slider img').each((ev) => {
		if(ev == contar){
			//console.log($('.content-slider img')[ev])
			console.log(`$(.content-slider img[${ev}])`)
			//var x = `$(.content-slider img[${ev}])`
			//console.log(y)
			//console.log($('.content-slider img[ev]'))
			$('.content-slider img').css({
				marginRight : '-100%',
				//transform: 'translateX(-763px)',
				transition: '1s all ease'
			})[ev]
			/*$('.content-slider img[ev]').css({
				marginRight : '-100%',
				//transform: 'translateX(-763px)',
				transition: '1s all ease'
			})*/
		}
		if(contar > $('.content-slider img').length - 1){
			//console.log('Parar de contar')
			//contar = -1
			//ev = -1
		}
	})
	contar++
	//console.log(contar)
}, 3000)
