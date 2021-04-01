const shravan = {
    height: 6,
    complexion: "fair"
}

const katty = Object.assign({},shravan)

console.log(katty)  // while accessing katty we get attribute of shravan as object is 
                    // cloned


const mark = JSON.parse(JSON.stringify(shravan)) // usingg  jason 

console.log(mark)