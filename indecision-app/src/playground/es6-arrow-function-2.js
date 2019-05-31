const add = function (a, b) {
    return a + b
}

console.log(add(55, 1))

const user = {
    name: 'Andrew',
    cities: ['Carazinho', 'Passo Fundo', 'Nao me toque'],
    printPlacesLived() {

        return this.cities.map((city) => {    return this.name + ' has lived in ' + city
        })
        return cityMessages
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}


console.log(multiplier)
