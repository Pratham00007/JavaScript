const  url="https://meowfacts.herokuapp.com/?count=3";
// let promise=fetch(url);
// console.log(promise);

// using async

/*
const get_facts  = async () =>{
    console.log("getting data");
    let response = await fetch(url);
    console.log(response)
}

//  this was get type example when we want to reciceive from the api 
//  when nop option is defined its by default get type
*/
const get_facts  = async () =>{
    console.log("getting data");
    let response = await fetch(url);
    console.log(response)
let data = await response.json();
console.log(data);

}