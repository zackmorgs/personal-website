
// SuperString.prototype.constructor = function (string_argument) {
//   string_argument.bind(this);
// }
// var SuperString = new class SuperString extends String {
//   constructor (string_argument){
//     super(string_argument);
//     string_argument.bind(this);
//   }
// }
// SuperString.replaceAll = function(search, replacement) {
//   var target = this;
//   return target.split(search).join(replacement);
// };
// SuperString.constructor = function (string_argument) {
//   this.bind(string_argument);
//   this.replaceAll.bind();
//   return this;
// }

// String.prototype.constructor.replaceAll = function(search, replacement) {
//   var target = this;
//   return target.split(search).join(replacement);
// };
// String.prototype.constructor
var SuperString = function (argument) {
  this.constructor = function (argument) {
     this.replaceAll = function (search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };
    return this;
  };
  return new String(argument);
};

// string_argument.bind(this)
export default SuperString;
