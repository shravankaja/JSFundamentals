/* callback is a function. We pass the function to be performed next as 
a agrument to the previous function. Callback function gets executed when 
function to which callback is passed has completed its execution */

function print(string, callback) {
    setTimeout(() => {
        console.log(string)
        callback()
    }, Math.floor(Math.random*100))
}


print('Start', () => { 
    print('Print Something', () => {
        print('finish', () => {})
    })
})