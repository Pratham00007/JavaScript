// asynchronus prg
console.log("execute first");
setTimeout(third,4000);
function third(){
    console.log("printed third after 4 second");
}
console.log("execute second");

// callbacks

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,func2){
    func2(a,b);

    // func2 ek fuction lega para,eter me
    
}

calculator(1,2,sum);