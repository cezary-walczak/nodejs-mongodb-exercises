function sayHi() {
  console.log('hi!')
}
sayHi()

var sayBye = function() {
  console.log('bye!')
}

function callFunction(fun) {
  fun()
}

callFunction(sayBye)