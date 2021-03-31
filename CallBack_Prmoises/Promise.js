/* To deal with callback hell problem promises were introduced.Promise 
can have one more states 'Pending','Resolve','Reject'*/

function print(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random*100))
    })
}

//print('start').then(()=>print('print something')).then(()=> print('finsih'))

 async function printAll() {
    await print('start')
    await print('print something')
    await print('finish')
}

printAll()