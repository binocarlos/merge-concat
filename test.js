var tape = require('tape')
var merge = require('./')

var data = [{
	a:'red',
	b:'blue'
},{
	b:'green'
}]

tape('do a basic merge', function(t){
	var flat = merge(data)

	console.dir(flat)

	t.equal(flat.a, 'red', 'a=red')
	t.equal(flat.b, 'green', 'b=green')

	t.end()
})

tape('run a concatenated pipe example', function(t){
	var flat = merge(data, function(prev, next, field){
		return prev.charAt(0)=='b' ? prev + ',' + next : next
	})

	console.dir(flat)

	t.equal(flat.a, 'red', 'a=red')
	t.equal(flat.b, 'green', 'b=blue,green')

	t.end()
})