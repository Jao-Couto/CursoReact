//Arrow Function
function padrao() {
    return "isso é uma function padrao"
}
console.log(padrao());

const arrow = () => {
    return "isso é uma arrow function"
}
console.log(arrow());


//.map()
const arrayMap = [10, 5, 8, 56]
const resultMap = arrayMap.map((item, index, array) => {
    return item + index
})
console.log("map", resultMap);

//.filter()
const arrayFilter = [0, 5, 2, 8]
const resultFilter = arrayFilter.filter((item, index, array) => {
    return item == index
})
console.log("filter", resultFilter);

//Desestruturação
const obj = { nome: 'Joao', p1: 5 }
const { nome, p1 } = obj
console.log(nome, p1)

const array = [1, 2, 5];
const [a, b, c] = array;
console.log(a, b, c)

//Spread
const newObj = { ...obj, p2: 6 }
console.log(newObj);

const newArray = [...array, 8]
console.log(newArray);