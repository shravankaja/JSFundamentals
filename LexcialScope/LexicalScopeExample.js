let globalVariable = "Global"

function print() {

    let localVariable = "Local"

    function child() {
        let childVariable = "Child"
        console.log(globalVariable)
        console.log(localVariable)
        console.log(childVariable)
    }
    child();
}
print();

//---------OutPut-------------------------//
/*  Global 
    local 
    child  
Since all three variables are within scope
*/

let globalVariable = "Global"

function print() {

    let localVariable = "Local"

    function child() {
        let childVariable = "Child"
    }
    child();
    console.log(globalVariable)
    console.log(localVariable)
    console.log(childVariable)
}
print();

//-------Output---------------------------//
/* 
    Global
    local
    child - not defined error (Since this variable is accessed out o scope)
*/

let globalVariable = "Global"

function print() {

    let localVariable = "Local"

    function child() {
        let childVariable = "Child"
    }
    child();

}
print();

console.log(globalVariable)
console.log(localVariable)
console.log(childVariable)

//---------Output--------------------------//
/*   
     Global 
     local - not defined  (Since this variable is accessed out o scope)
     child - not deined (Since this variable is accessed out o scope)
     
*/




