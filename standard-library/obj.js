var extend = function (to, from) {
  // for (var property in from) {
  //   to[property] = from[property];
  // }

  // return to;
  for (var property in from) {
    console.log(property)
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }

  return to;
}

var to = {}
var from = {
  a: 1,
  get a() {return 1}
}
extend(to, from)
console.log(to)
// var a = to
// console.log(a)
