var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)


function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray {
  return array.unshift(element)
}
