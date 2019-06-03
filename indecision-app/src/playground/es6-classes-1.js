
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreetting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age}`
    }
}

class Students extends Person{
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
}

const me = new Students('Andrew Mead', 26, 'Computer Science')
console.log(me.hasMajor())

const other = new Students('Andrew otherad')
console.log(other.hasMajor()) 