const arrayOfObjects = [
    {
        name: "Casey"
        age: 100
    },
    {
        name: "Jeff"
        age: 20
    },
    {
        name: "Curtis"
        age: 12
    }
]

const numArray = [44, 5, 78, 21, 9, 88]

function multiplyArray (array) {
  return array.reduce((acc, el) => {
    return acc * el
  }, 1)
}
