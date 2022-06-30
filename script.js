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
        if (callback(array[i], i, array)) {
            arrayResult.push(array[i])
        }
    }
    return arrayResult
}


// 4. find
function newFind(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            return array[i]
        }
    }
    return undefined
}


// 5. indexOf
function newIndexOf(array, value, from = 0) {
    for(let i = from; i < array.length; i++){
        if(value === array[i]){
            return i
        }
    }
    return '-1'
}


// 6. includes
function newIncludes(array, value, from = 0) {
    for(let i = from; i < array.length; i++){
        if(value === array[i]){
            return true
        }
    }
    return false
}


// 7. reduce
function newReduce(array, callback, comeca) {
    let acumulador = array[0]
    if(comeca !== undefined){
        acumulador = comeca
    }

    for (let i = comeca ? 0 : 1; i < array.length; i++) {
        acumulador = callback(acumulador, array[i])
    }
    
    return acumulador
}


// - EXTRAS
// 1. findIndex
function newFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            return i
        }
    }
    return undefined
}


// 2. some
function newSome(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) {
            return true
        }
    }
    return false
}


// 3. every
function newEvery(array, callback) {
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array) === false) {
            return false
        }
    }
    return true
}


// 4. concat
function newConcat(array, concatArray) {
    let arrayResult = []
    for(let i = 0; i < array.length; i++){
        arrayResult.push(array[i])
    }
    for(let i = 0; i < concatArray.length; i++){
        arrayResult.push(concatArray[i])
    }
    return arrayResult
}


// 5. join
function newJoin(array, separator) {
    let string = ''
    if (separator === undefined){
        separator = ','
    }

    for(let i = 0; i < array.length; i++){
        if (i === (array.length - 1)){
            string = string + array[i]
        }
        else {
            string = string + array[i] + separator
        }
    }

    return string
}


// 6. slice
function newSlice(array, start, end) {
    let arrayResult = []
    if(end === undefined){
        end = array.length
    }
    if(start === undefined){
        arrayResult = array
        return arrayResult
    }
    for(i = start; i < end; i++){
        arrayResult.push(array[i])
    }

    return arrayResult    
}