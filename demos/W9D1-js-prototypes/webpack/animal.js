function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`nom nom nom`);
};

module.exports = Animal;