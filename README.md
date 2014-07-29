## merge-concat

Merge an array of objects and concatenate values based on a function

## install

```bash
$ npm install merge-concat
```

## usage

```js
var merge = require('merge-concat')

var data = [{
	a:'red',
	b:'blue'
},{
	b:'green'
}]

var flat = merge(data)

console.dir(flat)
```

This would print

```js
{
	a:'red',
	b:'green'
}
```

## concatfn

You can supply a second function that decides on how to handle overwrites

For example - if a value starts with 'b' we can ensure it is never overwritten:

```js
var flat = merge(data, function(prev, next, field){
	return prev.charAt(0)=='b' ? prev : next
})

console.dir(flat)
```

This would print

```js
{
	a:'red',
	b:'green'
}
```

This lets you concatenate previous values based on custom logic:


```js
var flat = merge(data, function(prev, next, field){
	return prev.charAt(0)=='b' ? prev + ',' + next : next
})

console.dir(flat)
```

This would print

```js
{
	a:'red',
	b:'blue,green'
}
```

## api

### `merge(arr, function(prev, next, field){})`

Get an object that merges the properties of the provided array - later objects take precedence.

If the concatfn is defined, it is called with the `previous`, `next` and `field` variables for each override.

The normal behaviour is to return `next` but you can use custom logic to decide how things are joined.

```js
merge(arr, function(prev, next, field){
	if(prev.match(/\|\s*$/) || next.match(/^\s*\|/)){
		return prev + next
	}
	else{
		return next
	}
})

```

## licence

MIT