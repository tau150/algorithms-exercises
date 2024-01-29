//  Implement Function.prototype.bind()


/*
  const foo = function(){
    console.log(this.bar)
  }

  let baz = foo.bind({bar: 'hello})

  baz(); // Hello

*/

Function.prototype.bind = function(context) {
  const _this = this
  return function() {
    _this.apply(context, [...arguments])
  }
}
