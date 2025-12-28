// callback Hell
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();

        }
        // agar getnextdata fuction hai to ye execute karo kewal
    },2000);
}

getData(1,()=>{
    getData(2);
});

// getNextData me getData(2) pass kiya

// ab dataid 2 wala agle 2 sec baadexecute hoga

// for calling 3 getData(2) me get data 3 pass karo similary go on  like

// callback hell
 
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

