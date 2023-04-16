class Person {
  constructor(name = '', kelas = '') {
    this.name = name;
    this.kelas = kelas;
  }

  setName(name) {
    this.name = name;
  }
  setKelas(kelas) {
    this.kelas = kelas;
  }
  getName() {
    return this.name;
  }
  getKelas() {
    return this.kelas;
  }
}

module.exports = Person
