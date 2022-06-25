// 1. forEach
function newForEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}


// 2. map
function newMap(array, callback) {
    const arrayResult = []
    for(let i = 0; i < array.length; i++){
        arrayResult.push(callback(array[i], i, array))
    }
    return arrayResult
}


// 3. filter
function newFilter(array, callback) {
    const arrayResult = []
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === true) {
            arrayResult.push(array[i])
        }
        else {}
    }
    return arrayResult
}


// 4. find
function newFind(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === true) {
            return array[i]
        }
        else {
            return undefined
        }
    }
}


// 5. indexOf
function newIndexOf(array, value, from = 0) {
    for(let i = from; i < array.length; i++){
        if(value === array[i]){
            return i
        }
        else{}
    }
    return '-1'
}


// 6. includes
function newIncludes(array, value, from = 0) {
    for(let i = from; i < array.length; i++){
        if(value === array[i]){
            return true
        }
        else{}
    }
    return false
}


// 7. reduce
function newReduce(array, callback) {
    let previous = array[0]
    let current
    let result
    if(typeof previous === "string"){result = ''}
    else if(typeof previous === "number"){result = 0}
    for(let i = 1; i < array.length; i += 2){
        previous = array[i-1]
        current = array[i]
        if(previous !== undefined){
            result += callback(previous, current)
        }
        else {}
    }
    if(array.length % 2 === 0){return result}
    else{return result + array[array.length -1]}
}