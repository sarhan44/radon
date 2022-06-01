// ======[Trim Function]=========
let trim_fun = function (){
    let new2 = '     functonUp'
    let ab = new2.trim()
    console.log(ab)
}

// ======[Change In Lower Case]=========

let changeLower = function (){
    let new2 = 'THIS TEXT CONVERTED INTO LOWER CASE'
    let ac = new2.toLowerCase()
    console.log(ac)
}

// ======[Change In Upper Case]=========

let changeUpper = function (){
    let new2 = 'this text converted in upper case'
    let bc = new2.toUpperCase()
    console.log(bc)
}

// ===== [Make Globle]=====

module.exports.trim_fun = trim_fun
module.exports.changeLower = changeLower
module.exports.changeUpper = changeUpper