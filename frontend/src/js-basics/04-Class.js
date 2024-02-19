
class Test {
  constructor(name, count) {
    this.name = name
    this.count = count
  }
  describe() {
    return `${this.name} - ${this.count}`
  }
}

const test = new Test('test', 5)
console.log(test.describe()) // test - 5


