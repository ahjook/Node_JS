
class person {
constructor(firstname , secondname) {
this.firstname = firstname;
this.secondname = secondname;
}
greet(){
console.log(`Hi! ${this.firstname} ${this.secondname}, Welcome to NODE JS CLASS`)


}
}

module.exports = person;