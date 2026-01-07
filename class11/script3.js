// // promises


// // if resolve called means succesfully done 
// // if rejected called means done but there are some error 
// // else processing state

// /*
// let promise = new Promise((resolve,rejected)=>{
//     console.log("i am a promise");
//     rejected("error at delivery");
//     // resolve("done");
// })

// */

// in real:

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }

// 2 sec tak pending then resolved     

function asncFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}


function asncFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data 1");
asncFunction1().then((res)=>{
    console.log('fetching data2');
    asncFunction2().then((res)=>{});
});