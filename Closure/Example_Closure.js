

function calculatePercentageAndCgpa(marks) {
    let percentage = marks/80;
    console.log(errorVarible); // cannot access inner variables because it id defined inside this functions scope
    console.log("percatage is :"+percentage*100)
    return function calculateCGPA() {
        let errorVarible=100;
        console.log("Cgpa is :"+percentage*10);
        console.log("Total marks : "+marks)
    }
}


const cgpaFunction = calculatePercentageAndCgpa(70);
cgpaFunction();


/* In this example we can note that variable defined in one function can be used
by other function when they their scope is nested. Every function or a javascript 
file will have it own scope and outer scopes of other elememnts can be accessed by 
elements having it own scope. Finally anything inside has access to oustide its scope. 
Like childern can take money form parents but parents cannot take money form childern */