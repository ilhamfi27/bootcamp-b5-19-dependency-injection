const promptSync = require('prompt-sync'); // dari npm, harus install lewat npm
const Person = require('./person');

const prompt = promptSync();
const p = new Person()
const name = prompt('siapa nama kamu? ')
p.setName(name)
const kelas = prompt('kamu dari kelas mana? ')
p.setKelas(kelas)

console.log(`namamu ${p.getName()} dari kelas ${p.getKelas()}`);
