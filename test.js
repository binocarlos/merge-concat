var tape = require('tape')
var merge = require('./')

tape('do a basic merge', function(t){
	var data = [{
		a:'red',
		b:'blue'
	},{
		b:'green'
	}]

	var flat = merge(data)

	console.dir(flat)

	t.end()
})

tape('run a concatenated pipe example', function(t){
	t.end()
})