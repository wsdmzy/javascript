var me = {
  name: "kyle"
}
function identify(context) {
  return context.name.toUpperCase()
}

// function identify() {
//   return this.name.toUpperCase()
// }

console.log(identify(me))
console.log(identify.call(me))